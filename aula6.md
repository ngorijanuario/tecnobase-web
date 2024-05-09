# Incorporando Vídeos e Músicas

O HTML5 introduziu tags específicas para incorporar vídeos e músicas em suas páginas web, proporcionando uma experiência multimídia mais rica e envolvente. Com essas tags, você pode reproduzir vídeos locais ou remotos, controlar a reprodução e adicionar recursos interativos.

## Tag <video> para Vídeos Locais
Sintaxe
```html
<video src="video.mp4" controls autoplay loop>
  <p>Seu navegador não suporta a tag de vídeo.</p>
</video>
```
Explicação dos Atributos:
- src: Caminho completo do arquivo de vídeo no seu servidor (ex: src="videos/meu-video.mp4").
- controls: Exibe controles de reprodução padrão (play, pause, volume, tela cheia, etc.).
- autoplay: Inicia a reprodução do vídeo automaticamente quando a página é carregada.
- loop: Reproduz o vídeo em loop contínuo, sem parar.

## Tag <audio> para Músicas Locais
Sintaxe
```html
<audio src="musica.mp3" controls autoplay loop>
  <p>Seu navegador não suporta a tag de áudio.</p>
</audio>
```
Explicação dos Atributos:
- src: Caminho completo do arquivo de música no seu servidor (ex: src="musicas/minha-musica.mp3").
- controls: Exibe controles de reprodução padrão (play, pause, volume, etc.).
- autoplay: Inicia a reprodução da música automaticamente quando a página é carregada.
- loop: Reproduz a música em loop contínuo, sem parar.

