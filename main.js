Vue.config.devtools = true;

new Vue({
    el: '#app',
    newTodoTitle: null,
    data: {
        todos: [
            { title: '犬の散歩', completed: false },
            { title: 'プログラミング', completed: false }
        ],
        filter: 'all'
    },
    computed: {
        filteredTodos() {
            if (this.filter === 'all') {
                return this.todos
            } else if (this.filter === 'completed') {
                return this.todos.filter((todo) => {
                    return todo.completed
                })
            } else if (this.filter === 'active') {
                return this.todos.filter((todo) => {
                    return !todo.completed
                })
            }
        }
    },
    filters: {
        pluralize(n) {
            if (n == 1) {
                return 'item'
            } else {
                return 'items'
            }
        }
    },
    methods: {
        addTodos() {
            if (!this.newTodoTitle) {
                return
            }
            this.todos.push({ title: this.newTodoTitle, completed: false })
            this.newTodoTitle = null
        },
        removeTodo(index) {
            this.todos.splice(index, 1)

        }
    }
})