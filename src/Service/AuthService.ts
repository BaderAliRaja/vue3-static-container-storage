class Task {
    constructor(
        public name: string
    ) {

    }
}

class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public tasks: Task[] = []
    ) {

    }

    public fullName() {
        return this.firstName + " " + this.lastName;
    }

    public addTask(name: string) {
        this.tasks.push(new Task(name));
    }
}

export default class AuthService {

    public user: null | User = null;

    public async makeLoginRequest() {
        this.user = new User('bader', 'ali'); // fake fetch
    }

}