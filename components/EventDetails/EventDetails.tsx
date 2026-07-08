import { CalendarDays, Clock, MapPin } from "lucide-react";

type EventDetailsProps = {
  event: {
    displayDate: string;
    displayTime: string;
  };
  location: {
    name: string;
    address: string;
    mapsUrl: string;
  };
};

export function EventDetails({ event, location }: EventDetailsProps) {
  return (
    <section className="panel">
      <p className="kicker">Detalles del evento</p>

      <Detail icon={<CalendarDays size={20} />} title="Fecha" text={event.displayDate} />
      <Detail icon={<Clock size={20} />} title="Hora" text={event.displayTime} />
      <Detail icon={<MapPin size={20} />} title="Lugar" text={location.name} />

      <p className="my-5 text-sm leading-relaxed text-muted">{location.address}</p>

      <a className="secondary-button" target="_blank" rel="noopener noreferrer" href={location.mapsUrl}>
        Cómo llegar
      </a>
    </section>
  );
}

function Detail({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-4 border-b border-[rgba(201,162,39,.14)] py-4 text-left">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[rgba(201,162,39,.34)] bg-[#fffdf9] text-[#B9972E]">
        {icon}
      </span>
      <div>
        <strong>{title}</strong>
        <p className="mt-1 text-muted">{text}</p>
      </div>
    </div>
  );
}
