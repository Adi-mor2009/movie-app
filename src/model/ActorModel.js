class ActorModel {
    constructor(plainActorOrFirstName, lastName, birthday, imdbLink, img) {
        if(typeof plainActorOrFirstName === 'object') {
            this.firstName = plainActorOrFirstName.firstName;
            this.lastName = plainActorOrFirstName.lastName;
            this.birthday = plainActorOrFirstName.birthday;
            this.imdbLink = plainActorOrFirstName.imdbLink;
            this.img = plainActorOrFirstName.img;
        } else {
            this.firstName = plainActorOrFirstName;
            this.lastName = lastName;
            this.birthday = birthday;
            this.imdbLink = imdbLink;
            this.img = img;
        }
    }
    age() {
        const currentYear = new Date().getFullYear();
        return this.birthday ? currentYear - this.birthday.split("-")[0] - 1 : "";
    }
}

export default ActorModel;