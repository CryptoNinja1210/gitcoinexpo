import PropTypes from "prop-types";
import {
  Card,
  Avatar,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SponsorCard({ img, name, position, socials }) {
  return (
    <>
      <Card className="mt-6 w-3/4 mx-auto h-72 mb-2">
        <CardHeader color="white-gray" className="relative h-56 align-middle flex items-center">
          <img
            className="m-auto"
            src={img}
            alt={name}
          />
        </CardHeader>
        <CardBody>
          {/* <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
            {name}
          </Typography> */}
          {/* <Typography className='text-center'>
            {name}
          </Typography> */}
        </CardBody>
        <CardFooter className="pt-0 mx-auto">
          <a href={name}><Button>Vist Site</Button></a>
        </CardFooter>
      </Card>
    </>
  );
}

SponsorCard.defaultProps = {
  position: "",
  socials: null,
};

SponsorCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

SponsorCard.displayName = "/src/widgets/layout/team-card.jsx";

export default SponsorCard;
