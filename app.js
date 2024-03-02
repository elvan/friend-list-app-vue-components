const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: 'melvin',
          name: 'Melvin Jenkins',
          phone: '01234 5678 991',
          email: 'melvin@localhost.com',
        },
        {
          id: 'jessica',
          name: 'Jessica Weber',
          phone: '09876 543 221',
          email: 'jessica@localhost.com',
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
