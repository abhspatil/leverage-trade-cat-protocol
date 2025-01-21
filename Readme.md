# Leverage.trade (Game Hub)

Leverage.trade (Game Hub) is a platform designed to redefine the gaming and trading experience by merging decentralized technologies with engaging gameplay. It allows users to participate in a trustless, non-custodial environment where they can bid individually against secure, open-source, contract-based bots or compete in multiplayer modes with leverage up to 10x. This unique blend of gaming and trading brings a gamified, community-driven experience to the decentralized ecosystem.

For more info read https://catprotocol.org/


## Key Features

### Secure and Transparent Gameplay

- Built on open-source contracts for transparency and security.
- Every bid and game is verifiable and tamper-proof.
- Trustless system without intermediaries.

### Non-Custodial Wallet Integration

- Players connect their wallets in a non-custodial manner (e.g., MetaMask/WalletConnect).
- Full control of funds retained by users at all times.

### Gamified Trading and Bidding

- Simple, intuitive trading transformed into a game-like experience.
- Bidding and leveraging mechanics enhance engagement and potential rewards.

### Earning Points and Rewards

- Participants earn points through gameplay and trading.
- Points act as decentralized recognition and are usable within the ecosystem.

### Decentralized Advertising and Asset Promotion

- Revolutionizes asset promotion with gamified advertisements and leaderboards.
- Earned points can be used for decentralized advertising to grow project visibility.

### Tokenized Economy

- Points earned on the platform can be converted into:
  - **FB Tokens**
  - **OP_CAT Tokens**
  - **CAT20 Tokens**
- Points create a dynamic and rewarding ecosystem.

---

## Flows

### Step 0: User Onboarding

- Users visit the platform and connect their wallet (MetaMask/WalletConnect).
- Proceed to platform features.

### Step 1: Platform Overview

- Explore available options:
  - Bidding Games (Individual Mode).
  - Casino Multiplayer Games.
  - Leaderboards.
- Select the preferred mode of participation.

### Step 2: Individual Bidding Mode

- Select an individual game and compete against contract-based bots.
- Place a bid using wallet funds.
  - **Win:** Earn points and rewards.
  - **Loss:** Bid deducted (verifiable via contract).

### Step 3: Casino Multiplayer Mode

- Select multiplayer leverage-based games.
- Compete with other users (e.g., leverage up to 10x).
- Place leveraged bids.
  - **Win:** Leveraged rewards and points.
  - **Loss:** Deduction based on leverage mechanics.

### Step 4: Points and Rewards System

- Earn points through:
  - Successful bids or wins.
  - Consistent gameplay.
- Points are displayed in user profiles.

### Step 5: Decentralized Advertising

- Use earned points to:
  - Promote assets through gamified advertisements.
  - Gain visibility via leaderboards.

### Step 6: Leaderboard System

- Highlights top users/projects based on:
  - Points earned.
  - Gameplay success.
- Incentivizes competition and user retention.

### Step 7: Token Economy

- Convert points into tokens:
  - FB Tokens, OP_CAT Tokens, CAT20 Tokens.
- Redeem or trade tokens on the platform.

### Step 8: Continuous Improvement

- Platform evolves through:
  - User feedback loops.
  - New games and features.
  - Expanded token integrations.

---

## Technical Implementation

### sCrypt-Based Smart Contract

A commit-and-reveal mechanism is used for secure and transparent interactions.

#### Contract Deployment

- Deployer initializes the smart contract by:
  - Adding a predefined word (encoded using SHA256).
  - Specifying a reward amount for solving the challenge.
- The encoded word is securely stored and cannot be decoded (one-way hashing).

#### Participation and Guessing

- Participants (resolvers) join by:
  - Sharing their wallet address.
  - Depositing funds to start guessing.
- Guesses are hashed and compared with the stored SHA256 hash.

#### Winning and Rewards

- If the resolver guesses the correct word:
  - A fee is deducted from the reward amount.
  - Remaining reward is sent to the resolver's wallet.

#### Multiple Attempts

- Participants can make multiple attempts by depositing additional funds.

---

## Future Improvements

### Use Case Extensions

#### Treasure Hunts and Riddle-Solving Games

- **Mechanics:**
  - Contract encodes the solution (e.g., riddle answer) as a SHA256 hash.
  - Participants compete to solve the challenge.
  - Rewards distributed automatically to correct resolvers.
- **Applications:**
  - Scalable for treasure hunts, logic puzzles, and intellectual challenges.
  - Enhances engagement through blockchain transparency.

#### Producer-Consumer Problems

- **Mechanics:**
  - Producers encode tasks as SHA256 hashes (e.g., resource puzzles).
  - Consumers attempt to solve and submit relevant inputs.
  - Contract validates solutions and processes rewards.
- **Applications:**
  - Ideal for blockchain-based supply chain optimization and gamified task-solving.

## Testing Transaction Examples

Below are example transactions demonstrating how the system operates.

### Example Transactions

- word: BLOCK
  Transaction ID: 84e9ca0ad4ac91b77eb843c6e366f0a80cd435017b0aec9bb94586b6b7088508
  address: bc1pxqhjzfyj8lf396cd6cj6ynv3el53zen6nc9hm3v59s0ahc8umk3qn9uujn
  Transaction Hex: 02000000000101c7a9bfb2fa20d1de44fe2a63336ad215398279690835bdd6c841050c768480190100000000ffffffff02204e000000000000225120302f2124923fd312eb0dd625a24d91cfe911667a9e0b7dc5942c1fdbe0fcdda2e0f71d00000000002251201115533349430f568f633a631f6fbb4b8be92e7b6223ccf84047dee56bd6c9b8014080400e47b1150be01216f6c504fb8711ad8802ed78dcbb1266b43ea888d503120f89c111c53833ffb2ae0ba4ede75b0c7d90022fa05ed86f4571673ff7a132af00000000

- word: CHAIN
  Transaction ID: fb1070add5d29eb4ef09c38407c3b0eda81132c1310d7f3d3fc16e172c7eb55b
  address: bc1pxqj9nagc48gqk8fml8pzaxvdx8wm0y3nhzk75perfzjdky654mlqk5pjnc
  Transaction Hex: 02000000000101088508b7b68645b99bec0a7b0135d40ca8f066e3c643b87eb791acd40acae9840100000000ffffffff02204e000000000000225120302459f518a9d00b1d3bf9c22e998d31ddb79233b8adea072348a4db1354aefe38961d00000000002251201115533349430f568f633a631f6fbb4b8be92e7b6223ccf84047dee56bd6c9b80140636373b5412ef8fccbf38f2789c629940b749c3fedb786867e61641e5abe68d715c1052140875d7bb875e1bee8dc8334bf4ed25fb9acc0880830fc00b1e25ce600000000

- word: TOKEN
  Transaction ID: 6b10a9e23fa2a2dc072d257bc1ba70105be6b7601917415293d7b5a0b8ecd71a
  address: bc1pjrpcrxmjyg95jk3pjxesxrrutr3csjexhptnl9au9rd6fqkzzf8qanr5wy
  Transaction Hex: 020000000001015bb57e2c176ec13f3d7f0d31c13211a8edb0c30784c309efb49ed2d5ad7010fb0100000000ffffffff02204e00000000000022512090c3819b72220b495a2191b3030c7c58e3884b26b8573f97bc28dba482c2124e90341d00000000002251201115533349430f568f633a631f6fbb4b8be92e7b6223ccf84047dee56bd6c9b80140285ae7faf63342c3976294813a48425560eb208cf2e24899d76280422c08985153e9864598153e62b15dae5a2c72f4f1a3570cb67429f2caa1fafddbcac2727f00000000

- word: VALUE
  Transaction ID: d9d9f273b720220cde0d748738d2ba44cd5d33e65b5b46db1dd18ac82010ee9b
  address: bc1p8qwzt2z4jv5050fltuxggytxvulv4pcf9jwr69qn940nalqgvcgscjjh6x
  Transaction Hex: 020000000001011ad7ecb8a0b5d7935241171960b7e65b1070bac17b252d07dca2a23fe2a9106b0100000000ffffffff02204e000000000000225120381c25a8559328fa3d3f5f0c841166673eca87092c9c3d14132d5f3efc086611e8d21c00000000002251201115533349430f568f633a631f6fbb4b8be92e7b6223ccf84047dee56bd6c9b80140c09cc37be9721381f0c6df873f89878ea1ca17d4adee839de4c0567b68bf93ffaa01bfb272ccaffabf6c05882d76e6c278a14bf71dd14eb6cd35857cd9f27f0500000000

- word: CRYPT
  Transaction ID: 43c092fa4a0ce9cadab4f36f26681a1c823d323d473ccb188639044d063bf4ad
  address: bc1pwjle5cgrdc4r3vmld8wsxmyed6d2lq4m5ju49q4p7dc5rnz8702qplgzrs
  Transaction Hex: 020000000001019bee1020c88ad11ddb465b5be6335dcd44bad23887740dde0c2220b773f2d9d90100000000ffffffff02204e00000000000022512074bf9a61036e2a38b37f69dd036c996e9aaf82bba4b95282a1f37141cc47f3d440711c00000000002251201115533349430f568f633a631f6fbb4b8be92e7b6223ccf84047dee56bd6c9b801405db325ecfa8cd9e744737d9abbedfa8f0539e9511f1c930edad28855222a819307c89764dfc54163b2fa35c381d9c69bf6360b3687365a5c5b100b908ce8e27d00000000

- word: SOLVE
  Transaction ID: 1bbff010ad0237bba374e65a5f6123b002b6e7f69603fb2ca4aa333d38b29e89
  address: bc1p57x8calc0q5csdvu4t0r448txmtvr75plfxxne4azafj9kjtzrlsz0pctd
  Transaction Hex: 02000000000101adf43b064d04398618cb3c473d323d821c1a68266ff3b4dacae90c4afa92c0430100000000ffffffff02204e000000000000225120a78c7c77f8782988359caade3ad4eb36d6c1fa81fa4c69e6bd175322da4b10ff980f1c00000000002251201115533349430f568f633a631f6fbb4b8be92e7b6223ccf84047dee56bd6c9b80140ed358391b828f5627c8a5b0142b045d80c2bad303d994c33ed4fc11117686c1ba1d24cbad79ef693565bd3f2b6e1b8d89c8472d77f54132516299ff209c618f000000000

### FOR TESTING

- word = TEST1
  address= bc1pqmfzkw7w50wmqplxdgu7m7wvc0kc0g2y69kkdr2cnmjp6jz9mc6q6wavdu
  Transaction ID: a139e44212b69e6c452d42489dad8213c2d520deab1255a3198b5adac1e97744
  Transaction Hex: 02000000000101f5ab2472dda5be2556b424322ba53d7918d622562a0949de8955d9fcae95cfe90000000000ffffffff02204e00000000000022512006d22b3bcea3ddb007e66a39edf9ccc3ed87a144d16d668d589ee41d4845de34d82cf20d000000002251201115533349430f568f633a631f6fbb4b8be92e7b6223ccf84047dee56bd6c9b80140cca62bfd2cf4b2b856b5f73be3de76493fce7efa5bb89cf40df244f4dc8fd5c91e63b2fed5948d278b6734c5ae6ecc40828a90fe609c789b51d2bf523cded42000000000

- word= TEST2
  address=bc1p7e0uzxns03wfv3yymtjkdwn0e6273qecml4zpfyunm3wsleam3eqsjykc2
  Transaction ID: aab9e279138a99129f81a23820bc1bc25c67a47d439baca45579969d13cc341b
  Transaction Hex: 020000000001018d0f7cdb40f664c408bf74e58b189f007b7b1e9b28fda08cf5876fd2dfb81d300100000000ffffffff02204e000000000000225120f65fc11a707c5c964484dae566ba6fce95e88338dfea20a49c9ee2e87f3ddc7250c10502000000002251201115533349430f568f633a631f6fbb4b8be92e7b6223ccf84047dee56bd6c9b80140ed8764b8dfe6c325d3eb8cac0580a8bdaddb4015205aea75a6fee50618c68556660ea546773b4c9ce8445f247c4d8960281a5302fe5bbb1c654b3c21a61467b000000000
