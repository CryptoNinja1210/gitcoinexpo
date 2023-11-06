import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard, SponsorCard } from "@/widgets/cards";
import { featuresData, teamData, sponsorData } from "@/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                color="white"
                className="mb-6 origintech text-6xl"
              >
                Crypto Expo Dubai  2023.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Date: December 28, 2023 at 6:30 PM. Place - Dubai, ATLANTIS, THE PALM
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h1"
                className="mb-3 origintech font-bold"
                color="blue-gray"
              >
                Who We Are
              </Typography>
              <br />
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Crypto Expo Dubai is organized by Hqmena.
                Witness the largest Crypto Expo in Dubai with top-notch investors and leaders in the cryptocurrency industry to network and discover new business possibilities.
                Don't pass up the chance to network with the best cryptocurrency businesses for trading and investing.
                Learn about the cryptocurrency industry, Altcoins, Blockchain, and Consensus. We are highly proficient in organizing a business-to-business event by providing the cryptocurrency industry with supreme quality educational resources and networking possibilities.
              </Typography>
              {/* <Button variant="outlined">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="mt-32 flex flex-wrap items-center container mx-auto">
          <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
            <Card className="shadow-lg shadow-gray-500/10">
              <CardHeader className="relative h-56">
                <img
                  alt="Card Image"
                  src="/img/teamwork.jpeg"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3 font-bold"
                >
                  Top Notch Services
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  The Arctic Ocean freezes every winter and much of the
                  sea-ice then thaws every summer, and that process will
                  continue whatever happens.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="mx-auto -mt-8 w-full px-4 md:w-6/12">
            <Typography
              variant="h1"
              className="mb-3 origintech font-bold"
              color="blue-gray"
            >
              Why To Attend?
            </Typography>
            <br />
            <Typography className="mb-8 font-normal text-blue-gray-500">
              For the people who belong to the crypto industry, be a part of our summit to deliver the industry’s rich content and updates on cryptocurrencies to explore the various cryptocurrency exchanges and the digital currency blow-up.
              <br />
              <br />
              Figure out how it can revolutionize the globe and comprehend the crypto era.
            </Typography>
            <Button variant="outlined flex items-center"><UsersIcon className="h-6 w-6 text-blue-white-900 inline-block mr-2" />Register Now</Button>
          </div>
        </div>
      </section>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="mt-32 flex flex-wrap items-center container mx-auto">
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <Typography
              variant="h1"
              className="mb-3 origintech font-bold"
              color="blue-gray"
            >
              2023 HIGHLIGHTS
            </Typography>
            <br />
            <Typography className="mb-8 font-normal text-blue-gray-500">
              Check out the Dubai's Largest Crypto Expo Investing and Trading Conference for two days of content-rich experience, real-time networking, engaging discussions, and resounding success.
            </Typography>
            {/* <Button variant="outlined flex items-center"><UsersIcon className="h-6 w-6 text-blue-white-900 inline-block mr-2" />Register Now</Button> */}
          </div>
          <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
            <Card className="shadow-lg shadow-gray-500/10">
              <CardHeader className="relative h-56">
                <img
                  alt="Card Image"
                  src="/img/teamwork.jpeg"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3 font-bold"
                >
                  Top Notch Services
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  The Arctic Ocean freezes every winter and much of the
                  sea-ice then thaws every summer, and that process will
                  continue whatever happens.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="2023 Speakers">
            More speakers Will be added soon
          </PageTitle>
          <div className="mt-24">
            <Carousel responsive={responsive}>
              {teamData.map(({ img, name, position, socials }) => (
                <TeamCard
                  key={name}
                  img={img}
                  name={name}
                  position={position}
                  socials={
                    <div className="flex items-center gap-2">
                      {socials.map(({ color, name }) => (
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-lg fa-${name}`} />
                        </IconButton>
                      ))}
                    </div>
                  }
                />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Our sponsors">
            
          </PageTitle>
          <div className="mt-24">
            <Carousel responsive={responsive}>
              {sponsorData.map(({ img, name, position, socials }) => (
                <SponsorCard
                  key={name}
                  img={img}
                  name={name}
                  position={position}
                  socials={
                    <div className="flex items-center gap-2">
                      {socials.map(({ color, name }) => (
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-lg fa-${name}`} />
                        </IconButton>
                      ))}
                    </div>
                  }
                />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          {/* <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div> */}
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
