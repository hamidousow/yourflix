export class Movie {

    id!: number;
    title!: string;
    actors!: Array<string>;
    img!: string;
    description!: string

    constructor(title:string, actors: Array<string>, img:string, description:string) {
        this.title = title;
        this.actors = actors;
        this.img = img;
        this.description = description;
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