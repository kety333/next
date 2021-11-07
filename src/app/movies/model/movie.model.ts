export class Movie {
  public id: string;
  public title: string;
  public image: string;
  public synopsis: string;
  public rating: string;
  public type: string; //May  use  enum if there are other types
  public released: string;
  public runtime: string;
  public largeimage: string;
  public unogsdate: string;
  public imdbid: string;
  public download: string;
  public time?: string;

  constructor(id: string, title: string, image: string, synopsis: string, rating: string,
              type: string, released: string, runtime: string, largeimage: string, unogsdate: string,
              imdbid: string, download: string) {

    this.id =id;
    this.title = title;
    this.image =image;
    this.synopsis = synopsis;
    this.rating = rating;
    this.type =  type;
    this.released = released;
    this.runtime = runtime;
    this.largeimage =  largeimage;
    this.unogsdate = unogsdate;
    this.imdbid = imdbid;
    this.download = download;
  }

}
