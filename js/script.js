Vue.config.devtools = true;
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
  computed: {},
  methods: {
    filteredContacts() {
      const query = this.filteredQuery.toLowerCase();
      // IF the "query" is contained in the contactName it will be visible, otherwise no
      this.contacts.forEach((contact) => {
        const contactName = contact.name.toLowerCase();
        contact.visible = contactName.includes(query) ? true : false;
      });
    },
    getCurrentContactChat(i) {
      // Reset the dropdown message if active
      this.activeDropdownIndex = null;
      // Assigns the object containing the single contact to "currentContact" on indexes equality
      this.contacts.forEach((contact, index) => {
        if (index === i) this.currentContact = contact;
      });
    },
    isMessageReceived(message) {
      // Returns a class to be assigned to the message based on "status"
      return message.status === "received" ? "received" : "sent";
    },
    createMessage(messageText, status) {
      // Function to create messages
      const newMessage = {
        text: messageText,
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        status: status,
      };
      this.currentContact.messages.push(newMessage);
    },
    sendNewMessage() {
      // IF the message is undefined do not proceed
      if (!this.newMessage) return;

      // Creation & Push of User Message
      const newMessage = this.createMessage(this.newMessage, "send");
      this.newMessage = "";

      // Current Contact Reply (after 1s)
      setTimeout(this.receivedNewMessage, 1000);
    },
    receivedNewMessage() {
      // Creation & Push of Contact Message
      const newMessage = this.createMessage("Ok!", "received");
    },
    getLastReceivedMessage(contact) {
      // If there are no messages, it writes an empty string
      if (contact.messages.length === 0) return "";

      // filters only the messages received,
      // to display as the last message always and only one of those received by the contact
      const justReceivedMessage = contact.messages.reduce((acc, message) => {
        if (message.status === "received") acc.push(message);
        return acc;
      }, []);

      // Returns the last chat message
      const message = justReceivedMessage[justReceivedMessage.length - 1].text;
      // IF message length exceeds 20 characters, it will be formatted
      if (message.split("").length > 20) return message.substr(0, 20) + " ...";
      // ELSE it will be printed without changes
      else return message;
    },
    getLastReceivedMessageDate(contact) {
      // If there are no messages, it writes an empty string
      if (contact.messages.length === 0) return "";

      // filters only the messages received,
      // to display as the last message Date always and only one of those received by the contact
      const justReceivedMessageDate = contact.messages.reduce((acc, message) => {
        if (message.status === "received") acc.push(message);
        return acc;
      }, []);

      // Returns the last chat message date
      return justReceivedMessageDate[justReceivedMessageDate.length - 1].date;
    },
    toggleDropdown(i) {
      // Toggle messages dropdown on indexes equality
      if (this.activeDropdownIndex === null) this.activeDropdownIndex = i;
      else this.activeDropdownIndex = null;
    },
    deleteMessage(i, messagesArray) {
      // Removes the message from the list
      messagesArray.splice(i, 1);
      // Reset the dropdown message if active
      this.activeDropdownIndex = null;
    },
  },
});
