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

export function TeamCard({ img, name, position, socials }) {
  return (
    <>
      {/* <Card color="transparent" shadow={false} className="text-center">
        <Avatar
          src={img}
          alt={name}
          size="xxl"
          className="h-full w-full shadow-lg shadow-gray-500/25"
        />
        <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
          {name}
        </Typography>
        {position && (
          <Typography className="font-normal text-blue-gray-500">
            
          </Typography>
        )}
        {socials && <div className="mx-auto mt-5">{socials}</div>}
      </Card> */}
      <Card className="mt-6 w-3/4 mx-auto h-72 mb-2">
        <CardHeader color="blue-gray" className="relative h-56 inline-block">
          <img
            src={img}
            alt={name}
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
            {name}
          </Typography>
          <Typography className='text-center'>
            {position}
          </Typography>
        </CardBody>
      </Card>
    </>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
