// components/admin/UserProperties.tsx
import { fetchAllProperties } from '@/utils/actions';
import { deleteUserPropertyAction } from '@/utils/actions';
import Link from 'next/link';
async function UserProperties() {
  const properties = await fetchAllProperties();

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">User Properties</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Property Name</th>
            <th className="py-2">Owner</th>
            <th className="py-2">Price</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id} className="text-center border-t">
              <td className="py-2">{property.name}</td>
              <td className="py-2">
                {property.profile.firstName} {property.profile.lastName}
              </td>
              <td className="py-2">${property.price}</td>
              <td className="py-2">
                {/* new */}
              <Link
    href={`/admin/properties/${property.id}/edit`}
    className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600 transition-colors duration-200"
  >
    Edit
  </Link>
   {/* @ts-ignore */}
  <form action={deleteUserPropertyAction}>
    <input type="hidden" name="propertyId" value={property.id} />
    <button
      type="submit"
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
    >
      Delete
    </button>
  </form>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserProperties;
