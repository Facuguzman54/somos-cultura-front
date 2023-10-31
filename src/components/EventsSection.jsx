import { EventCard } from "./EventCard"
import { Filters } from "./Filters"

export const EventsSection = () => {
    return (
        <section className="">
            <h3 className="text-center text-2xl font-bold mb-4">Todos los eventos</h3>
            <div>
                <Filters></Filters>
                <div className="grid md:grid-cols-3 gap-3">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
        </section>
    )
}
