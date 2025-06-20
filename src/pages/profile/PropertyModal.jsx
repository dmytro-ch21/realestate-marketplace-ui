import { useState } from "react";

function PropertyModal({
  setShowAddModal,
  profile,
  setProfile,
  setOwnedProperties,
}) {
  const [newProperty, setNewProperty] = useState({
    title: "",
    description: "",
    price: "",
    area_sqft: "",
    bathrooms: "",
    bedrooms: "",
    year_build: "",
    property_type: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    images: [
      { file: null, caption: "" },
      { file: null, caption: "" },
      { file: null, caption: "" },
      { file: null, caption: "" },
    ],
  });

  const handleAddProperty = () => {
   const newProp = {
      id: Date.now(),
      owner_id: profile.id,
      title: newProperty.title,
      description: newProperty.description,
      price: newProperty.price,
      area_sqft: newProperty.area_sqft,
      bathrooms: newProperty.bathrooms,
      bedrooms: newProperty.bedrooms,
      year_build: newProperty.year_build,
      property_type: newProperty.property_type,
      address: newProperty.address,
      city: newProperty.city,
      state: newProperty.state,
      zip_code: newProperty.zip_code,
      images: newProperty.images
        .filter((img) => img.file)
        .map((img) => ({
          image_url: URL.createObjectURL(img.file),
          caption: img.caption,
        })),
    };

    setProfile({
      ...profile,
      owned_listings: [...profile.owned_listings, newProp],
    });
    setOwnedProperties((prev) => [...prev, newProp]);
    setShowAddModal(false);
    setNewProperty({
      title: "",
      description: "",
      price: "",
      area_sqft: "",
      bathrooms: "",
      bedrooms: "",
      year_build: "",
      property_type: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      images: [
        { file: null, caption: "" },
        { file: null, caption: "" },
        { file: null, caption: "" },
        { file: null, caption: "" },
      ],
    });
  };

  return (
    <>
      <div
        className="modal-backdrop fade show"
        style={{ backgroundColor: "rgba(0,0,0,1)" }}
      ></div>
      <div className="modal show d-block" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Property</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowAddModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-2"
                placeholder="Title"
                type="text"
                value={newProperty.value}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, title: e.target.value })
                }
              />
              <textarea
                className="form-control mb-2"
                placeholder="Description"
                type="text"
                value={newProperty.description}
                onChange={(e) =>
                  setNewProperty({
                    ...newProperty,
                    description: e.target.value,
                  })
                }
              />
              <input
                className="form-control mb-2"
                placeholder="Price"
                type="number"
                value={newProperty.price}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, price: e.target.value })
                }
              />
              <input
                className="form-control mb-2"
                placeholder="Area (sqft)"
                type="number"
                value={newProperty.area_sqft}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, area_sqft: e.target.value })
                }
              />
              <input
                className="form-control mb-2"
                placeholder="Bedrooms"
                type="number"
                value={newProperty.bedrooms}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, bedrooms: e.target.value })
                }
              />
              <input
                className="form-control mb-2"
                placeholder="Bathrooms"
                type="number"
                value={newProperty.bathrooms}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, bathrooms: e.target.value })
                }
              />
              <select
                name="property-type"
                id="property-type"
                className="form-control mb-2"
                value={newProperty.property_type}
                onChange={(e) =>
                  setNewProperty({
                    ...newProperty,
                    property_type: e.target.value,
                  })
                }
              >
                <option value="">Select Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="house">Townhouse</option>
                <option value="land">Land</option>
              </select>
              <input
                className="form-control mb-2"
                placeholder="Address"
                type="text"
                value={newProperty.address}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, address: e.target.value })
                }
              />
              <input
                className="form-control mb-2"
                placeholder="City"
                type="text"
                value={newProperty.city}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, city: e.target.value })
                }
              />
              <input
                className="form-control mb-2"
                placeholder="State"
                type="text"
                value={newProperty.state}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, state: e.target.value })
                }
              />
              <input
                className="form-control mb-2"
                placeholder="Zip Code"
                type="number"
                value={newProperty.zip_code}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, zip_code: e.target.value })
                }
              />
              <label htmlFor="images" className="form-label">
                Images (up to 4):
              </label>
              {[0, 1, 2, 3].map((i) => (
                <div className="mb-2">
                  <input
                    type="file"
                    className="form-control mb-2"
                    accept="image/*"
                    onChange={(e) => {
                      const images = [...newProperty.images];
                      images[i].file = e.target.files[0];
                      setNewProperty({ ...newProperty, images });
                    }}
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Image Caption"
                    onChange={(e) => {
                      const images = [...newProperty.images];
                      images[i].caption = e.target.value;
                      setNewProperty({ ...newProperty, images });
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleAddProperty}>
                Add Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyModal;
