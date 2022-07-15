// Vue JS
const boolzapp = new Vue({
  el: "#boolzapp",
  data: {
    user: {
      name: "Nome Utente",
      avatar: "_io",
    },
    filteredQuery: "",
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
    filteredContacts() {
      const contactsList = [];

      this.contacts.filter((contact) => {
        if (contact.name.toLowerCase().indexOf(this.filteredQuery.toLowerCase()) != -1) {
          contactsList.push(contact);
        }
      });
      return (this.contacts = contactsList);
    },
  },
});
