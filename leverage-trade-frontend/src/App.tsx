import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react"

import "./App.css"

import {
  boardDefault,
  boardStatusDefault,
  computeGuessStatus,
  generateAcceptableWordSet,
  generateMainWordSet,
  getRandomItemFromSet,
  LetterStatus,
} from "./helpers"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import GameOver from "./components/GameOver"
import { createGuess, getAllContracts } from "./utils/api"

export interface IFractalphabetGameContext {
  board: string[][]
  setBoard: Dispatch<SetStateAction<string[][]>>
  boardStatus: LetterStatus[][]
  setBoardStatus: Dispatch<SetStateAction<LetterStatus[][]>>
  currAttempt: { attempt: number; letterPos: number }
  setCurrAttempt: Dispatch<
    SetStateAction<{ attempt: number; letterPos: number }>
  >
  onDelete: () => void
  onEnter: () => void
  onSelectLetter: (key: string) => void
  correctWord: string
  letterStatus: Map<string, LetterStatus>
  setLetterStatus: Dispatch<SetStateAction<Map<string, LetterStatus>>>
  gameOver: { gameOver: boolean; guessedWord: boolean }
  setGameOver: Dispatch<
    SetStateAction<{ gameOver: boolean; guessedWord: boolean }>
  >
}

export const AppContext = createContext<IFractalphabetGameContext>(
  {} as IFractalphabetGameContext
)

function App() {
  const [userWalletAddress, setUserWalletAddress] = useState(
    "bc1p74prlg6h4nezcdtjhc5h5zzgjs47a2yhuukwp8dyktmjnycvdzessnza0p"
  )
  const [isWordgame, setIsWordgame] = useState(false)
  const [board, setBoard] = useState(boardDefault)
  const [boardStatus, setBoardStatus] = useState(boardStatusDefault)
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  })
  const [wordSet, setWordSet] = useState(
    new Set(["BLOCK", "CHAIN", "TOKEN", "VALUE", "CRYPT", "SOLVE"])
  )
  const [words, setWords] = useState([])
  const [letterStatus, setLetterStatus] = useState(new Map())
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  })

  //const correctWord = "RIGHT";
  const [correctWord, setCorrectWord] = useState("RIGHT")

  // generate set once (by empty deps)

  const onSelectLetter = (key: string) => {
    if (currAttempt.letterPos >= 5) return
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = key
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })
  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = ""
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
  }

  const onEnter = async () => {
    if (currAttempt.letterPos !== 5) return

    let currWord = board[currAttempt.attempt].join("").toUpperCase()

    console.log(
      "curr word ",
      currWord,
      " attepmt ",
      currAttempt,
      " contract = ",
      words[currAttempt.attempt]
    )

    const contractStatus = await createGuess({
      word: currWord,
      contractAddress: words[currAttempt.attempt].contractAddress,
      userAddress: userWalletAddress,
      feeRate: 30,
    })

    if (!contractStatus) {
      alert("try again")
    }

    // compute the status of the letters
    const newBoardStatus = [...boardStatus]
    newBoardStatus[currAttempt.attempt] = computeGuessStatus(
      currWord,
      correctWord
    )
    setBoardStatus(newBoardStatus)

    // defining here because it won't be refreshed after the setCurrAttempt
    const nextAttemptCount = currAttempt.attempt + 1

    setCurrAttempt({
      attempt: nextAttemptCount,
      letterPos: 0,
    })

    if (currWord === correctWord) {
      setGameOver({
        gameOver: true,
        guessedWord: true,
      })
    } else if (nextAttemptCount === 6) {
      setGameOver({
        gameOver: true,
        guessedWord: false,
      })
    }
  }

  const handleGetAllContracts = async () => {
    const res = await getAllContracts()
    console.log("all contracts = ", res)
    setWords(res)
  }

  useEffect(() => {
    handleGetAllContracts()
  }, [])

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          board,
          setBoard,
          boardStatus,
          setBoardStatus,
          currAttempt,
          setCurrAttempt,
          onDelete,
          onEnter,
          onSelectLetter,
          correctWord,
          letterStatus,
          setLetterStatus,
          gameOver,
          setGameOver,
        }}
      >
        {!isWordgame && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                padding: "10px",
                backgroundColor: "grey",
                borderRadius: "12px",
              }}
            >
              <div style={{}}>
                <h2 style={{}}>Game Hub</h2>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <button
                  style={{
                    padding: "10px",
                    borderRadius: "12px",
                    backgroundColor: "blue",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  Connect Wallet
                </button>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
              <div
                style={{
                  border: "1px solid grey",
                  padding: "1rem",
                  borderRadius: "6px",
                }}
              >
                <img
                  src="/word.png"
                  alt="Offline Dragon Game"
                  style={{ width: "200px", height: "220px" }}
                />
                <h3>Fratalphabet</h3>
                <p>Live Users: 1</p>
                <button
                  onClick={(e) => {
                    setIsWordgame(true)
                  }}
                >
                  Play Now
                </button>
              </div>

              <div
                style={{
                  border: "1px solid grey",
                  padding: "1rem",
                  borderRadius: "6px",
                }}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2024/02/15/14/57/animal-8575560_640.jpg"
                  alt="Offline Dragon Game"
                  style={{ width: "200px", height: "220px" }}
                />
                <h3>Dragon Game</h3>
                <p>Live Users: 25</p>
                <button>Play Now</button>
              </div>

              <div
                style={{
                  border: "1px solid grey",
                  padding: "1rem",
                  borderRadius: "6px",
                }}
              >
                <img
                  src="https://m.media-amazon.com/images/I/81-JkdF5yFL.jpg"
                  alt="Offline Dragon Game"
                  style={{ width: "200px", height: "220px" }}
                />
                <h3>Tic-Tac-Toe</h3>
                <p>Live Users: 15</p>
                <button>Play Now</button>
              </div>

              <div
                style={{
                  border: "1px solid grey",
                  padding: "1rem",
                  borderRadius: "6px",
                }}
              >
                <img
                  src="https://www.lemon64.com/assets/images/games/screens/zuul/zuul_01.png"
                  alt="Offline Dragon Game"
                  style={{ width: "200px", height: "220px" }}
                />
                <h3>Zuul</h3>
                <p>Live Users: 0</p>
                <button>Play Now</button>
              </div>
            </div>
          </div>
        )}
        {isWordgame && (
          <>
            <div>
              <h3>Enter your wallet address</h3>
              <input
                type="text"
                onChange={(e) => {
                  setUserWalletAddress(e.target.value)
                }}
              ></input>
            </div>
            <div className="game">
              <Board />
              {gameOver.gameOver ? <GameOver /> : <Keyboard />}
            </div>
          </>
        )}
      </AppContext.Provider>
    </div>
  )
}

export default App
