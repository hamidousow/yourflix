export class Movie {

    id!: number;
    title!: string;
    actors!: Array<string>;
    imgSrc!: string;
    description!: string

    public setTitre(title: string) {
        this.title = title;
    }
    public setDescription(description: string) {
        this.description = description;
    }
    public setImg(imgSrc: string) {
        this.imgSrc = imgSrc;
    }
    public setActors(actors: Array<string>) {
        this.actors = actors;
    }

}