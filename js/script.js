// Vue JS
const boolzapp = new Vue({
  el: "#boolzapp",
  data: {
    user: {
      name: "Nome Utente",
      avatar: "_io",
    },
    activeDropdownIndex: null,
    filteredQuery: "",
    newMessage: "",
    currentContact: undefined,
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
          },
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
        visible: true,
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "22/01/2022 18:15:22",
            status: "received",
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          {
            text: "Io mi chiamo Fabio piacere!",
            date: "23/01/2022 16:18:47",
            status: "received",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
          },
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
        visible: true,
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          {
            text: "Io mi chiamo Luisa piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
          },
        ],
      },
      {
        name: "Alessandra",
        avatar: "_5",
        visible: true,
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
          },
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
        visible: true,
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          {
            text: "Io mi chiamo Marco piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
          },
        ],
      },
      {
        name: "Simona",
        avatar: "_7",
        visible: true,
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
          },
          { text: "Gianluca, tu?", date: "10/01/2022 16:15:22", status: "sent" },
          {
            text: "Io mi chiamo Simona piacere!",
            date: "10/01/2022 16:18:47",
            status: "received",
          },
        ],
      },
      {
        name: "Donatello",
        avatar: "_8",
        visible: true,
        messages: [
          {
            text: "Ciao come ti chiami?",
            date: "10/01/2022 16:15:22",
            status: "received",
          },
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
  computed: {
    filteredContacts() {
      const query = this.filteredQuery.toLowerCase();

      this.contacts.forEach((contact) => {
        const contactName = contact.name.toLowerCase();

        contact.visible = contactName.includes(query) ? true : false;
      });
    },
  },
  methods: {
    getCurrentContactChat(i) {
      this.activeDropdownIndex = null;
      this.contacts.forEach((contact, index) => {
        if (index === i) this.currentContact = contact;
      });
    },
    isMessageReceived(message) {
      return message.status === "received" ? "received" : "sent";
    },
    getDate() {
      return dayjs().format("DD/MM/YYYY HH:mm:ss");
    },
    sendNewMessage() {
      if (!this.newMessage) return;

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
    toggleDropdown(i) {
      if (this.activeDropdownIndex === null) this.activeDropdownIndex = i;
      else this.activeDropdownIndex = null;
    },
    deleteMessage(i, messagesArray) {
      messagesArray.splice(i, 1);
      this.activeDropdownIndex = null;
    },
  },
});
