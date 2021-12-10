const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'Aaron',
          phone: '123-456-7890',
          email: 'aaron@example.com',
        },
        {
          id: 2,
          name: 'Denise',
          phone: '234-567-8901',
          email: 'denise@example.com',
        },
        {
          id: 3,
          name: 'Timothy',
          phone: '345-678-9012',
          email: 'timothy@example.com',
        },
      ],
    };
  },
});

app.component('friend-contact', {
  props: ['friend'],

  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,

  data() {
    return {
      // friend: {
      //   id: 1,
      //   name: 'Aaron',
      //   phone: '123-456-7890',
      //   email: 'aaron@example.com',
      // },
      detailsAreVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
