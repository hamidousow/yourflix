export class Movie {

    id!: number;
    title!: string;
    actors!: Array<string>;
    img!: string;
    description!: string

    constructor() {
        
    }

    public setTitre(title: string) {
        this.title = title;
    }
    public setDescription(description: string) {
        this.description = description;
    }
    public setImg(img: string) {
        this.img = img;
    }
    public setActors(actors: Array<string>) {
        this.actors = actors;
    }

}