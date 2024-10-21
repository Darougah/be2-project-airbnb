import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={5}
        required
        className='leading-loose'
      />
    </div>
  );
}

const tempDefaultDescription =
  'Experience Swedish-style glamping in an A-frame cabin tent nestled within a beautiful olive orchard. Enjoy modern comforts like air conditioning, heating, a queen bed, TV, Wi-Fi, and amazing views. Were close to Weeki Wachee River State Park,where you can see mermaids and manatees, as well as the Chassahowitzka River and the SC Bike Path. Kayaks are available for river adventures.Our amenities include a bathhouse, fire pit, kitchenette, and fresh eggs. Relax and enjoy the fresh country air—no pets please. Friendly ducks, hens, and roosters roam the grounds, along with our rescue dogs: a Potcake from Bimini, a Retriever, and a Pomeranian.The space is both inspiring and relaxing. Enjoy the orchards beauty, especially in spring when the trees blossom and in fall during the harvest. We also have a farm store where we sell our farm-to-table products.';
export default TextAreaInput;