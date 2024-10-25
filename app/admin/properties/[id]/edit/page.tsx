// app/admin/properties/[id]/edit/page.tsx
import { fetchPropertyById } from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import CategoriesInput from '@/components/form/CategoriesInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CountriesInput from '@/components/form/CountriesInput';
import CounterInput from '@/components/form/CounterInput';
import AmenitiesInput from '@/components/form/AmenitiesInput';
import { SubmitButton } from '@/components/form/Buttons';
import { adminUpdatePropertyAction } from '@/utils/actions';

async function AdminEditPropertyPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyById(params.id);

  if (!property) {
    return <div>Property not found</div>;
  }

  const defaultAmenities = JSON.parse(property.amenities);

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Edit Property</h1>
      <FormContainer action={adminUpdatePropertyAction}>
        <input type="hidden" name="id" value={property.id} />
        <div className="grid md:grid-cols-2 gap-8 mb-4 mt-8">
          <FormInput
            name="name"
            type="text"
            label="Name (20 limit)"
            defaultValue={property.name}
          />
          <FormInput
            name="tagline"
            type="text"
            label="Tagline (30 limit)"
            defaultValue={property.tagline}
          />
          <PriceInput defaultValue={property.price} />
          <CategoriesInput defaultValue={property.category} />
          <CountriesInput defaultValue={property.country} />
        </div>

        <TextAreaInput
          name="description"
          labelText="Description (10 - 100 Words)"
          defaultValue={property.description}
        />

        <h3 className="text-lg mt-8 mb-4 font-medium">
          Accommodation Details
        </h3>
        <CounterInput detail="guests" defaultValue={property.guests} />
        <CounterInput detail="bedrooms" defaultValue={property.bedrooms} />
        <CounterInput detail="beds" defaultValue={property.beds} />
        <CounterInput detail="baths" defaultValue={property.baths} />
        <h3 className="text-lg mt-10 mb-6 font-medium">Amenities</h3>
        <AmenitiesInput defaultValue={defaultAmenities} />
        <SubmitButton text="Update Property" className="mt-12" />
      </FormContainer>
    </section>
  );
}

export default AdminEditPropertyPage;
