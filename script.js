document.addEventListener('DOMContentLoaded', () => {
    // --- Declaración de Variables ---
    const photoCollage = document.getElementById('photoCollage');
    const shuffleButton = document.getElementById('shuffleButton');
    const readMoreButton = document.getElementById('readMoreButton');
    const loveLetterTextarea = document.getElementById('loveLetter');
    const letterPaper = document.getElementById('letterPaper');
    const collagePhotos = document.querySelectorAll('.collage-photo');
    const birthdaySong = document.getElementById('birthdaySong'); 
    
    // ⭐ NUEVA VARIABLE PARA EL BOTÓN DE MÚSICA ⭐
    const musicButton = document.getElementById('musicButton');

    let letterExpanded = false;
    let isMusicPlaying = false; 

    // -------------------------------------------------------------
    // ⭐ NUEVA FUNCIONALIDAD: CONTROL DE MÚSICA ⭐
    // -------------------------------------------------------------
    musicButton.addEventListener('click', () => {
        if (!isMusicPlaying) {
            birthdaySong.volume = 0.6;
            birthdaySong.play().catch(error => {
                console.error("Error al iniciar la música:", error);
            });
            musicButton.innerHTML = 'Detener Música';
            isMusicPlaying = true;
        } else {
            birthdaySong.pause();
            musicButton.innerHTML = 'Iniciar Música';
            isMusicPlaying = false;
        }
    });

    // -------------------------------------------------------------
    // ⭐ El CÓDIGO DE INICIO AUTOMÁTICO HA SIDO ELIMINADO ⭐
    // -------------------------------------------------------------
    
    // --- 1. Funcionalidad de Mezclar Fotos (Shuffle) ---
    shuffleButton.addEventListener('click', () => {
        collagePhotos.forEach(photo => {
            const randomX = Math.random() * (photoCollage.clientWidth - photo.offsetWidth);
            const randomY = Math.random() * (photoCollage.clientHeight - photo.offsetHeight);
            const randomRotate = Math.random() * 40 - 20; 
            const randomZIndex = Math.floor(Math.random() * 10); 

            photo.style.top = `${randomY}px`;
            photo.style.left = `${randomX}px`;
            photo.style.transform = `rotate(${randomRotate}deg)`;
            photo.style.zIndex = randomZIndex;
        });
        
        // ELIMINAMOS el play() forzoso aquí
    });

    // --- 2. Funcionalidad de Expandir Carta ---
    readMoreButton.addEventListener('click', () => {
        if (!letterExpanded) {
            // Acción de Abrir:
            
            // ELIMINAMOS el play() forzoso aquí
            
            loveLetterTextarea.classList.add('expanded');
            letterPaper.classList.add('expanded');
            readMoreButton.textContent = 'Ocultar parte de la carta ⬆️';
            letterExpanded = true;
        } else {
            // Acción de Cerrar:
            loveLetterTextarea.classList.remove('expanded');
            letterPaper.classList.remove('expanded');
            readMoreButton.textContent = 'Leer la carta completa 📖';
            letterExpanded = false;
        }
    });

    // --- 3. Efecto de Partículas de Brillo (Sparkle) ---
    collagePhotos.forEach(photo => {
        photo.addEventListener('mouseover', (e) => {
            for (let i = 0; i < 5; i++) { 
                const sparkle = document.createElement('div');
                sparkle.classList.add('sparkle');
                
                sparkle.style.left = `${e.clientX + Math.random() * 40 - 20}px`;
                sparkle.style.top = `${e.clientY + Math.random() * 40 - 20}px`;
                sparkle.style.width = `${Math.random() * 8 + 2}px`; 
                sparkle.style.height = sparkle.style.width;
                sparkle.style.zIndex = 1000;

                document.body.appendChild(sparkle);

                sparkle.addEventListener('animationend', () => {
                    sparkle.remove();
                });
            }
            // ELIMINAMOS el play() forzoso aquí
        });
    });

    // --- Inicialización ---
    if (loveLetterTextarea.scrollHeight > loveLetterTextarea.clientHeight) {
        loveLetterTextarea.scrollTop = 0;
    }
});