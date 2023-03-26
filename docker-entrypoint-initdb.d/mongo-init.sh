#!/bin/bash

set -e

mongo <<EOF
use admin
db.createUser(
  {
    user: ${MONGO_USER},
    pwd: ${MONGO_PASS},
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)
  
use ${MONGO_DB_NAME}

db.createCollection("clientschemas")
db.clientschemas.insert([
  {
  _id: ObjectId("6415f212da63a53a41fec995"),
  name:"Daniel",
  cpf:"123.345.567-90",
  address:"Rua abc, 123",
  phone:"(21)98987-0998",
  permission: "admin",
  email:"daniel80barboza@gmail.com",
  birthDate: "2000-09-09",
  hash:"f4bd7393797a6e112c29f68441d1702e8c769bd9643d79075c372222efeb62ebea01a76c637edf630687ea5cba2e3945a9a2a366d6c6c7404d62b301a327d44cdf24bc3256a9f77822a4f79cb1869b925d5dc9dba4f6be127811fec0a5ad77fe09fa787aec5be80725c8a2b0b118af5d9ae24ce12b16f16d822ca00fc4ea6bdd187246137745842137e71a143322313de10d78e5b2413d2a40e3c5f32089c431acb0ec14cf53455a1b384e8ac1db6ff9e7818712ee18f43c85ea5f88b3c89acaa449bbdf1b0fb49cceb8e91f538054c515a11a19b2a17298796a7740c121723c7bfbe5829c2f8f5ab551d2d7ce4a22c669fe1ef692c67ccf22277ca139f2aa75fc28a954f24a540433fc74199ac653d9bc8426b267f598d6fc8d18d6b4f0e1a8ca0afbfb06a1a23becb71c1e80141bb2330ca2682e9d6bd652d243632774868d7dab5d7145620eb1e09d50d4280a4bce578e5557c7b970641e4436ed438f2fe3aa2eeaba782ad778280a6157acc19b50434d1032e23df42518ddd3cc9bedcc9cee3d9f52f18bfe0fae7f9427b3b5d258079cb9fab96a5189b021e5203d66990202d70f36d57a6d541f0a0a736cbc8023c267ce67107333dc843a74093e059b27272dc0647ca754be823a01236c2bdb3f9386989e1e1ac69024200ccb57cc134a7e7f61576876d619ffbbb96b8177cfdeeafd9371704312d6c3e3a31984916d5e",
  salt:"43ddfb107bf7c684931226a4865b2d36",
  isVerified: false,
  refreshJWT:{"token":"","addedAt":"2023-03-18"}
  },
  {
  _id: ObjectId("64208560d0a5728a6bffe6b8"),
  name: "Daniel",
  cpf: "123.345.567-90",
  address: "Rua abc, 123",
  phone: "(21)98987-0998",
  permission: "client",
  email:"daniel95barboza@gmail.com",
  birthDate: "2000-09-09",
  hash:"f4bd7393797a6e112c29f68441d1702e8c769bd9643d79075c372222efeb62ebea01a76c637edf630687ea5cba2e3945a9a2a366d6c6c7404d62b301a327d44cdf24bc3256a9f77822a4f79cb1869b925d5dc9dba4f6be127811fec0a5ad77fe09fa787aec5be80725c8a2b0b118af5d9ae24ce12b16f16d822ca00fc4ea6bdd187246137745842137e71a143322313de10d78e5b2413d2a40e3c5f32089c431acb0ec14cf53455a1b384e8ac1db6ff9e7818712ee18f43c85ea5f88b3c89acaa449bbdf1b0fb49cceb8e91f538054c515a11a19b2a17298796a7740c121723c7bfbe5829c2f8f5ab551d2d7ce4a22c669fe1ef692c67ccf22277ca139f2aa75fc28a954f24a540433fc74199ac653d9bc8426b267f598d6fc8d18d6b4f0e1a8ca0afbfb06a1a23becb71c1e80141bb2330ca2682e9d6bd652d243632774868d7dab5d7145620eb1e09d50d4280a4bce578e5557c7b970641e4436ed438f2fe3aa2eeaba782ad778280a6157acc19b50434d1032e23df42518ddd3cc9bedcc9cee3d9f52f18bfe0fae7f9427b3b5d258079cb9fab96a5189b021e5203d66990202d70f36d57a6d541f0a0a736cbc8023c267ce67107333dc843a74093e059b27272dc0647ca754be823a01236c2bdb3f9386989e1e1ac69024200ccb57cc134a7e7f61576876d619ffbbb96b8177cfdeeafd9371704312d6c3e3a31984916d5e",
  salt:"43ddfb107bf7c684931226a4865b2d36",
  isVerified: false,
  refreshJWT:{"token":"","addedAt":"2023-03-18"}
  }
])

db.createCollection("calledschemas")
db.calledschemas.insert([
  {
  _id: ObjectId("6417736a9b99fa1eb4b6395f"),
  clientId: ObjectId("64208560d0a5728a6bffe6b8"),
  number:"16353421",
  subject:"Dúvida sobre produto",
  description:"O produto está com a cor diferente do anúncio",
  openedDate:"2023-03-1",
  status: "Pendente",
  category:"Produtos",
  image:"files-1679258474176.jpg",
  evaluation: 5,
  conversations: [{
    sender: "Daniel Barboza",
    message: "O produto está com a cor diferente do anúncio",
    msgAt: "2023-03-1"
  }]
  }
])

EOF
