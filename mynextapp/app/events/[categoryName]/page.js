import React from "react";
import { notFound } from 'next/navigation'; // to handle 404
import categoriesData from "@/app/data/FinalEventsList.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar2 from "@/components/main/Navbar2";
import '@/components/main/CardStyles.css'; 
export async function generateMetadata({ params }) {
  const { categoryName } = params;
  const category = categoriesData.categories.find(cat => cat.name === categoryName);

  if (!category) {
    return {
      title: 'Category Not Found'
    };
  }

  return {
    title: `${category.categorytitle.toUpperCase()} - EVENTS`
  };
}
const CategoryPage = ({ params }) => {
  const { categoryName } = params;
  const category = categoriesData.categories.find(cat => cat.name === categoryName);

  if (!category) {
    return notFound();
  }

  return (
    <div className="relative z-[10]">
      <Navbar2 />
      <StarsCanvas />
      <div className="relative z-[20]">
        <h1 className="titlefont">{category.categorytitle.toUpperCase()}</h1>
        <div className="Michroma flex flex-wrap justify-around">
          {category.events.map((event) => (
            <CardContainer className="inter-var mt-4" key={event.id}>
              <CardBody className="relative group/card z-[30] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white dark:text-white"
                >
                  {event.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {event.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={event.image}
                    height={500}
                    width={500}
                    className="w-full h-60 sm:h-80 md:h-96 object-cover rounded-xl group-hover:shadow-xl"
                    alt={event.title}
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <Link href={`/events/${categoryName}/${event.id}`}>VIEW DETAILS</Link>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

// New function to generate static parameters
export async function generateStaticParams() {
  const paths = categoriesData.categories.map((category) => ({
    categoryName: category.name,
  }));
  return paths;
}