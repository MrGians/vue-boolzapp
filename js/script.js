// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Trovate in allegato gli screenshot dell'app e una base di partenza coi dati utili per la milestone di oggi.

// Consigli Utili:
// non dimentichiamo di fare analisi sia per la struttura dati che per la grafica
// procediamo a blocchettoni per evitare di avere poi problemi col CSS in fase avanzata
// Cerchiamo di rispettare tutti i principi e le best practices viste finora (nomi di variabili e classi, centralizzazione ecc)
// Buon lavoro e soprattutto buon divertimento!!

// Vue JS
const boolzapp = new Vue({
  el: "#boolzapp",
  data: {
    user: {
      name: "Nome Utente",
      avatar: "_io",
    },
    newMessage: "",
    currentContact: undefined,
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        messages: [
          { text: "Ciao come ti chiami?", date: "10/01/2022 16:15:22", status: "received" },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          {
            text: "Io mi chiamo Michele piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        messages: [
          { text: "Ciao come ti chiami?", date: "22/01/2022 18:15:22", status: "received" },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          { text: "Io mi chiamo Fabio piacere!", date: "23/01/2022 16:18:47", status: "received" },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        messages: [
          { text: "Ciao come ti chiami?", date: "10/01/2022 16:15:22", status: "received" },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          {
            text: "Io mi chiamo Samuele piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        messages: [
          { text: "Ciao come ti chiami?", date: "10/01/2022 16:15:22", status: "received" },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          { text: "Io mi chiamo Luisa piacere!", date: "10/01/2022 16:18:47", status: "received" },
        ],
      },
      {
        name: "Alessandra",
        avatar: "_5",
        messages: [
          { text: "Ciao come ti chiami?", date: "10/01/2022 16:15:22", status: "received" },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          {
            text: "Io mi chiamo Alessandra piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
          },
        ],
      },
      {
        name: "Marco",
        avatar: "_6",
        messages: [
          { text: "Ciao come ti chiami?", date: "10/01/2022 16:15:22", status: "received" },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          { text: "Io mi chiamo Marco piacere!", date: "10/01/2022 16:18:47", status: "received" },
        ],
      },
      {
        name: "Simona",
        avatar: "_7",
        messages: [
          { text: "Ciao come ti chiami?", date: "10/01/2022 16:15:22", status: "received" },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          { text: "Io mi chiamo Simona piacere!", date: "10/01/2022 16:18:47", status: "received" },
        ],
      },
      {
        name: "Donatello",
        avatar: "_8",
        messages: [
          { text: "Ciao come ti chiami?", date: "10/01/2022 16:15:22", status: "received" },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          {
            text: "Io mi chiamo Donatello piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
          },
        ],
      },
    ],
  },
  computed: {},
  methods: {
    getCurrentContactChat(i) {
      this.contacts.forEach((cont, index) => {
        if (index === i) this.currentContact = cont;
      });
    },
    isMessageReceived(message) {
      return message.status === "received" ? "received" : "sent";
    },
    getDate() {
      return dayjs().format("DD/MM/YYYY HH:mm:ss");
    },
    sendNewMessage() {
      const newMessage = {
        text: this.newMessage,
        date: this.getDate(),
        status: "send",
      };
      this.currentContact.messages.push(newMessage);
      this.newMessage = "";

      setTimeout(this.receivedNewMessage, 1000);
    },
    receivedNewMessage() {
      const newMessage = {
        text: "Ok, se lo dici tu..",
        date: this.getDate(),
        status: "received",
      };
      this.currentContact.messages.push(newMessage);
    },
  },
});
