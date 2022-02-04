# Spotify 2.0

Olá.
Esse projeto é uma cópia do spotify, onde podemos ter acesso as nossas playlists e suas músicas, assim como aumentar e diminuir o volume de reprodução.
O projeto foi desenvolvido como objeto de estudo, utilizando NextJS, Middleware para controlar os acessos, ReactJS, Tailwind, MomentJS, RecoilJS e Lodash.

# Preview

![image](https://user-images.githubusercontent.com/69989761/152609708-76062110-dc7e-4204-a8a5-c574b696d13e.png)


# Do que precisa para testar ?
Para testar você vai precisar de:
 - NodeJs versão 16.13.2 ( Precisa ser essa! )
 - Npm
 - Spotify Desktop
 - Uma conta no Spotify

# Como Testar ?
  - Acesse https://developer.spotify.com/dashboard/applications e faça login com sua conta spotify.
  - Crie uma app com o nome spotify-2
  - Clique no card da sua app e você verá uma tela parecida com essa:
  
   ![image](https://user-images.githubusercontent.com/69989761/152613706-3525c40f-481f-4049-a0b4-dce7052c89a4.png)
   
   - Clique em edit settings e coloque isso -> http://localhost:3000/api/auth/callback/spotify no campo Redirect URIs e clique em Add e depois Save.
   - Clique em Show Client Secret.
   - Crie um arquivo na raiz do projeto chamado .env.local e coloque o seguinte conteúido:
   
      
     ```NEXTAUTH_URL=http://localhost:3000
      NEXT_PUBLIC_CLIENT_SECRET=
      NEXT_PUBLIC_CLIENT_ID=

      JWT_SECRET=some_super_secret_value
     ```
     
-  Adicione o Client Secret após o NEXT_PUBLIC_CLIENT_SECRET e o Client ID após NEXT_PUBLIC_CLIENT_ID.

 ![image](https://user-images.githubusercontent.com/69989761/152614672-906edd1a-0dc4-4470-a827-2608e43122ac.png)
 
- Após isso, acesse a pasta do projeto via terminal e rode:
 ```npm install```
 - Depois rode:
  ```npm run dev```
- Abra seu Spotify Desktop.
- Se tudo correu bem, acesse http://localhost:3000/ em qualquer navegador e faça login com sua conta Spotify para ter acesso ao projeto.
- Para poder funcionar, você precisa dar play alguma vez em qualquer musica de uma de suas playlists, depois pode dar pause e utilizar o Spotify através do projeto.
- Nem todas as features originais do Spotify foram implementadas, mas você pode dar play, pause, alterar o volume, trocar de playlist e musicas da forma que desejar, só é importante que você não feche seu Spotify Desktop durante o uso do projeto.


