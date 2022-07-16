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
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
            isActive: false,
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent", isActive: false },
          {
            text: "Io mi chiamo Michele piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
            isActive: false,
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "22/01/2022 18:15:22",
            status: "received",
            isActive: false,
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent", isActive: false },
          {
            text: "Io mi chiamo Fabio piacere!",
            date: "23/01/2022 16:18:47",
            status: "received",
            isActive: false,
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
            isActive: false,
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent", isActive: false },
          {
            text: "Io mi chiamo Samuele piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
            isActive: false,
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
            isActive: false,
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent", isActive: false },
          {
            text: "Io mi chiamo Luisa piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
            isActive: false,
          },
        ],
      },
      {
        name: "Alessandra",
        avatar: "_5",
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
            isActive: false,
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent", isActive: false },
          {
            text: "Io mi chiamo Alessandra piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
            isActive: false,
          },
        ],
      },
      {
        name: "Marco",
        avatar: "_6",
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
            isActive: false,
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent", isActive: false },
          {
            text: "Io mi chiamo Marco piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
            isActive: false,
          },
        ],
      },
      {
        name: "Simona",
        avatar: "_7",
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
            isActive: false,
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent", isActive: false },
          {
            text: "Io mi chiamo Simona piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
            isActive: false,
          },
        ],
      },
      {
        name: "Donatello",
        avatar: "_8",
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
            isActive: false,
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent", isActive: false },
          {
            text: "Io mi chiamo Donatello piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
            isActive: false,
          },
        ],
      },
    ],
  },
  computed: {
    filteredContacts() {
      const contactsList = [];

      this.contacts.filter((contact) => {
        if (contact.name.toLowerCase().indexOf(this.filteredQuery.toLowerCase()) != -1) {
          contactsList.push(contact);
        }
      });
      return contactsList;
    },
  },
  methods: {
    getCurrentContactChat(i) {
      this.filteredContacts.forEach((cont, index) => {
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
        isActive: false,
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
        isActive: false,
      };
      this.currentContact.messages.push(newMessage);
    },
    getLastMessage(contact) {
      if (contact.messages.length === 0) return "";

      const message = contact.messages[contact.messages.length - 1].text;

      if (message.split("").length > 20) return message.substr(0, 20) + " ...";
      else return message;
    },
    getLastMessageDate(contact) {
      if (contact.messages.length === 0) return "";

      return contact.messages[contact.messages.length - 1].date;
    },
    deleteMessage(message, i, messagesArray) {
      message.isActive = false;
      messagesArray.splice(i, 1);
    },
  },
});
