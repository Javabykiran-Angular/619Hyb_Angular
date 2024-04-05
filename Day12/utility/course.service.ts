export class courseService{

    private course:string[]=["Core Java","Advanced Java",'HTML,CSS,JS','MySql','Angular','Docker','AWS','Jenkings'];

    getCourse(){
        return this.course;
    }

}