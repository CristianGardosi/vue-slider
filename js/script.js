// *****************************************************
// SLIDER IMMAGINI GESTITO CON VUE
// Gestire navigazione immagini con click su freccie pallini e freccette sx / dx tastiera
// Fare eseguire il loop delle immagini, cambiando immagine ogni 3 secondi
// *****************************************************

const slider = new Vue({
    el: '#vuejs-slider',
    // Struttura ad oggetto per i data dal momento in cui ho più proprietà da settare in questa sezione
    data: {
        // Dato che gestirò dinamicamente e che traccerà l'index delle mie immagini per consentirmi le varie tipologie di navigazione richieste che lavoreranno grazie a questo indice
        indexPhoto: 0,
        // Array contenente le mie foto indicate con la medesima sintassi utilizzata nell'src html e pronte all'uso
        photos: [
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg'
        ]
    },
    // Nella sezione methods creo le funzioni che servono affinchè il mio slider funzioni
    methods: {
        // Funzione per passare alla foto successiva cliccando sulla freccia dx, utilizzo la sintassi arrow function. Il funzionamento consiste nel fatto che cliccando la suddetta freccia voglio aumentare il mio index di 1
        nextPhoto() {
            this.indexPhoto += 1;
            // Con questo if mi occupo della condizione nella quale arrivati all'ultima foto dell'array cliccando sulla freccia a dx deve riportarmi alla prima, ovvero quando index photo è maggiore del numero di foto meno uno perchè ricordiamo che gli array partono da 0
            if(this.indexPhoto > (this.photos.length - 1)) {
                this.indexPhoto = 0;
            }
        },
        // Lavoro all'inverso per la freccia di sx che mi permette di tornare indietro alla foto precedente
        prevPhoto() {
            this.indexPhoto -= 1;

            if(this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length - 1;
            } 
        }
    }
});