/**
 * @file initialState.js
 * @description This file defines the initial state of the application store in a Flux architecture.
 * The initial state is an object that holds the default values for the application's state.
 * It is used by the store to initialize its state and can be referenced throughout the application
 * to reset or compare the current state.
 *
 * The initial state object for the Redux store.
 *
 * This object defines the default state of the application before any actions are dispatched.
 *
 * Usage:
 * - Import this initialState object into your store configuration.
 * - Use it to set up the default state for your reducers.
 *
 * What is a slice:
 * - A slice is a portion of the initial state that is managed by a specific reducer.
 * - Each slice typically corresponds to a specific feature or domain in your application.
 *
 * How to adjust for your needs:
 * - Add properties to this object to define the initial state for different slices of your application.
 * - Ensure that each property corresponds to a slice managed by a reducer.
 *
 * @example:
 * const initialState = {
 *   user: {
 *     isAuthenticated: false,
 *     details: null,
 *   },
 *   posts: {
 *     list: []
 *   },
 * };
 *
 * @author dmytro-ch21
 */
export const initialState = () => ({
  // demo for todos - replace with your needed state
  todos: [
    {
      id: '1',
      title: 'This comes from your global store, delete it!',
      completed: false,
    },
  ],
  user: {
    isAuthenticated: false,
    userId: 1,
  },
  listings: [
    {
      address: '1234 Oceanview Blvd',
      city: 'Seattle',
      state: 'WA',
      zip_code: '30303',
      area_sqft: 1500,
      bathrooms: 2,
      bedrooms: 2,
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description:
        'Modern two-bedroom condo with stunning waterfront views, located in the heart of Seattle.',
      id: 1,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1746921248/listing_images/oqx14hhlxpaz0rjgjj7u.png',
        },
      ],
      latitude: 47.746734,
      longitude: -122.87435,
      owner_id: 2,
      price: 799000.77,
      property_type: 'condo',
      title: 'Waterfront Condo with Beautiful Views',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      tag: 'Waterfront View',
    },
    {
      address: '4321 Maple St',
      city: 'Seattle',
      state: 'WA',
      zip_code: '30304',
      area_sqft: 1800,
      bathrooms: 3,
      bedrooms: 4,
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description:
        'Spacious 4-bedroom family home with a large backyard, ideal for entertaining guests.',
      id: 2,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747102867/listing_images/dfm1i8msdwtq01wxupqu.png',
        },
      ],
      latitude: 47.752734,
      longitude: -122.88235,
      owner_id: 3,
      price: 950000.0,
      property_type: 'house',
      title: 'Spacious Family Home with Backyard',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      tag: 'Family Home',
    },
    {
      address: '789 Pine St',
      city: 'Seattle',
      state: 'WA',
      zip_code: '30305',
      area_sqft: 1400,
      bathrooms: 2,
      bedrooms: 2,
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description:
        'Charming 2-bedroom apartment located in a quiet neighborhood near downtown Seattle.',
      id: 3,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1746921248/listing_images/oqx14hhlxpaz0rjgjj7u.png',
        },
      ],
      latitude: 47.750734,
      longitude: -122.87735,
      owner_id: 4,
      price: 675000.5,
      property_type: 'apartment',
      title: 'Quiet Downtown Apartment',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      tag: 'Quiet Neighborhood',
    },
    {
      address: '1578 Elm St',
      city: 'Seattle',
      state: 'WA',
      zip_code: '30306',
      area_sqft: 2200,
      bathrooms: 3,
      bedrooms: 4,
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description:
        'Spacious, modern 4-bedroom house with a gourmet kitchen and large living room for family gatherings.',
      id: 4,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747102986/listing_images/yl5f7lqb9gehy1a9ilrg.png',
        },
      ],
      latitude: 47.752734,
      longitude: -122.87435,
      owner_id: 5,
      price: 1200000.99,
      property_type: 'house',
      title: 'Modern Family Home with Large Kitchen',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      tag: 'Gourmet Kitchen',
    },
    {
      address: '3487 Birch Ave',
      city: 'Seattle',
      state: 'WA',
      zip_code: '30307',
      area_sqft: 1250,
      bathrooms: 2,
      bedrooms: 2,
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description:
        'Contemporary 2-bedroom condo with breathtaking views of the city skyline.',
      id: 5,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747087939/listing_images/v1nawkubeyq546vjshlj.png',
        },
      ],
      latitude: 47.747734,
      longitude: -122.87535,
      owner_id: 6,
      price: 820000.0,
      property_type: 'condo',
      title: 'City View Condo in Downtown Seattle',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      tag: 'City View',
    },
    {
      address: '2143 Fir Dr',
      city: 'Seattle',
      state: 'WA',
      zip_code: '30308',
      area_sqft: 1600,
      bathrooms: 2,
      bedrooms: 3,
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description:
        'Beautiful 3-bedroom home with a cozy fireplace and a large deck perfect for outdoor entertaining.',
      id: 6,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747102801/listing_images/y4vkhgxvk7nos3mkxqs0.png',
        },
      ],
      latitude: 47.748734,
      longitude: -122.87635,
      owner_id: 7,
      price: 900000.99,
      property_type: 'house',
      title: 'Cozy Home with Fireplace and Deck',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      tag: 'Fireplace',
    },
    {
      address: '9543 Cedar Ln',
      city: 'Seattle',
      state: 'WA',
      zip_code: '30309',
      area_sqft: 2000,
      bathrooms: 3,
      bedrooms: 4,
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description:
        'Luxury 4-bedroom home with an open-plan design, a home office, and a stunning garden.',
      id: 7,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747102999/listing_images/piqhjlzsrbgckspcm6et.png',
        },
      ],
      latitude: 47.749734,
      longitude: -122.87735,
      owner_id: 8,
      price: 1500000.0,
      property_type: 'house',
      title: 'Luxury Home with Office and Garden',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      tag: 'Luxury Living',
    },
    {
      address: '1210 Oakwood Dr',
      city: 'Seattle',
      state: 'WA',
      zip_code: '30310',
      area_sqft: 2200,
      bathrooms: 3,
      bedrooms: 5,
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description:
        '5-bedroom, 3-bathroom estate with a private pool and fully-equipped outdoor kitchen.',
      id: 8,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747102999/listing_images/piqhjlzsrbgckspcm6et.png',
        },
      ],
      latitude: 47.750734,
      longitude: -122.87835,
      owner_id: 9,
      price: 1800000.0,
      property_type: 'house',
      title: 'Luxury Estate with Pool and Outdoor Kitchen',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      tag: 'Poolside Living',
    },
    {
      address: '1056 Sunset Blvd',
      city: 'Seattle',
      state: 'WA',
      zip_code: '30311',
      area_sqft: 1600,
      bathrooms: 2,
      bedrooms: 3,
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description:
        'Lovely home with panoramic views of the mountains and easy access to local amenities.',
      id: 9,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1746921248/listing_images/oqx14hhlxpaz0rjgjj7u.png',
        },
      ],
      latitude: 47.748734,
      longitude: -122.87535,
      owner_id: 10,
      price: 950000.0,
      property_type: 'house',
      title: 'Panoramic View Home',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      tag: 'Mountain Views',
    },
    {
      address: '2670 Summit Ave',
      city: 'Seattle',
      state: 'WA',
      zip_code: '30312',
      area_sqft: 1800,
      bathrooms: 3,
      bedrooms: 4,
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description:
        'Charming home with spacious rooms, a large front yard, and an updated kitchen with modern appliances.',
      id: 10,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747102867/listing_images/dfm1i8msdwtq01wxupqu.png',
        },
      ],
      latitude: 47.749734,
      longitude: -122.87635,
      owner_id: 11,
      price: 1100000.0,
      property_type: 'house',
      title: 'Charming Home with Spacious Yard',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      tag: 'Spacious Living',
    },
  ],

  // you can add here more slices (properties in the object) - user, theme, etc...
});
