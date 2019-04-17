export class Route {
    id: number;
    date: Date;
    description: string;

    // check if we can use serializer
    static mapOne(dto: any): Route {
        const route = new Route();
        route.id = dto.Id;
        route.date = new Date(dto.Date);
        route.description = dto.Description;
        return route;
    }
}
