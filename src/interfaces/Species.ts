import {Point} from 'geojson';
import {Document, Types} from 'mongoose';

interface Species extends Document {
  species_name: string;
  category: Types.ObjectId;
  image: string;
  location: Point;
}

export {Species};
