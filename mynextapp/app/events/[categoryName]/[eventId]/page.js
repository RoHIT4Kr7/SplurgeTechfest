import { notFound } from 'next/navigation';
import categoriesData from "@/app/data/FinalEventsList.json";
import EventPageClient from './EventPageClient';

export async function generateMetadata({ params }) {
  const { categoryName, eventId } = params;
  const category = categoriesData.categories.find(cat => cat.name === categoryName);
  const event = category ? category.events.find(event => event.id === eventId) : null;

  if (!event) {
    return {
      title: 'Event Not Found'
    };
  }

  return {
    title: `${event.title} - Register`
  };
}

const EventPage = ({ params }) => {
  const { categoryName, eventId } = params;
  const category = categoriesData.categories.find(cat => cat.name === categoryName);
  const event = category ? category.events.find(event => event.id === eventId) : null;

  if (!event) {
    return notFound();
  }

  return <EventPageClient event={event} categoryName={categoryName} />;
};

export default EventPage;

export async function generateStaticParams() {
  const paths = [];
  categoriesData.categories.forEach(category => {
    category.events.forEach(event => {
      paths.push({
        categoryName: category.name,
        eventId: event.id,
      });
    });
  });
  return paths;
}