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
      area_sqft: 1500,
      bathrooms: 2,
      bedrooms: 2,
      city: 'Seattle',
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description: 'Nice condo in ...',
      id: 1,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747087939/listing_images/v1nawkubeyq546vjshlj.png',
        },
      ],
      latitude: 47.746734,
      longitude: -122.87435,
      owner_id: 2,
      price: 799000.77,
      property_type: 'house',
      state: 'WA',
      title: 'Outstanding condo.',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      zip_code: '30303',
      tag: 'Waterfront View',
    },
    {
      area_sqft: 1500,
      bathrooms: 2,
      bedrooms: 2,
      city: 'Seattle',
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description: 'Nice condo in ...',
      id: 2,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747102867/listing_images/dfm1i8msdwtq01wxupqu.png',
        },
      ],
      latitude: 47.746734,
      longitude: -122.87435,
      owner_id: 2,
      price: 799000.77,
      property_type: 'house',
      state: 'WA',
      title: 'Outstanding condo.',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      zip_code: '30303',
      tag: 'Waterfront View',
    },
    {
      area_sqft: 1500,
      bathrooms: 2,
      bedrooms: 2,
      city: 'Seattle',
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description: 'Nice condo in ...',
      id: 3,
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
      property_type: 'house',
      state: 'WA',
      title: 'Outstanding condo.',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      zip_code: '30303',
      tag: 'Waterfront View',
    },
    {
      area_sqft: 1500,
      bathrooms: 2,
      bedrooms: 2,
      city: 'Seattle',
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description: 'Nice condo in ...',
      id: 4,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747102986/listing_images/yl5f7lqb9gehy1a9ilrg.png',
        },
      ],
      latitude: 47.746734,
      longitude: -122.87435,
      owner_id: 2,
      price: 799000.77,
      property_type: 'house',
      state: 'WA',
      title: 'Outstanding condo.',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      zip_code: '30303',
      tag: 'Waterfront View',
    },
    {
      area_sqft: 1500,
      bathrooms: 2,
      bedrooms: 2,
      city: 'Seattle',
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description: 'Nice condo in ...',
      id: 5,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747087939/listing_images/v1nawkubeyq546vjshlj.png',
        },
      ],
      latitude: 47.746734,
      longitude: -122.87435,
      owner_id: 2,
      price: 799000.77,
      property_type: 'house',
      state: 'WA',
      title: 'Outstanding condo.',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      zip_code: '30303',
      tag: 'Waterfront View',
    },
    {
      area_sqft: 1500,
      bathrooms: 2,
      bedrooms: 2,
      city: 'Seattle',
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description: 'Nice condo in ...',
      id: 6,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747102801/listing_images/y4vkhgxvk7nos3mkxqs0.png',
        },
      ],
      latitude: 47.746734,
      longitude: -122.87435,
      owner_id: 2,
      price: 799000.77,
      property_type: 'house',
      state: 'WA',
      title: 'Outstanding condo.',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      zip_code: '30303',
      tag: 'Waterfront View',
    },
    {
      area_sqft: 1500,
      bathrooms: 2,
      bedrooms: 2,
      city: 'Seattle',
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description: 'Nice condo in ...',
      id: 7,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747102999/listing_images/piqhjlzsrbgckspcm6et.png',
        },
      ],
      latitude: 47.746734,
      longitude: -122.87435,
      owner_id: 2,
      price: 799000.77,
      property_type: 'house',
      state: 'WA',
      title: 'Outstanding condo.',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      zip_code: '30303',
      tag: 'Waterfront View',
    },
    {
      area_sqft: 1500,
      bathrooms: 2,
      bedrooms: 2,
      city: 'Seattle',
      created_at: 'Sat, 10 May 2025 21:56:56 GMT',
      description: 'Nice condo in ...',
      id: 8,
      images: [
        {
          image_url:
            'https://res.cloudinary.com/dncnlnhlq/image/upload/v1747102999/listing_images/piqhjlzsrbgckspcm6et.png',
        },
      ],
      latitude: 47.746734,
      longitude: -122.87435,
      owner_id: 2,
      price: 799000.77,
      property_type: 'house',
      state: 'WA',
      title: 'Outstanding condo.',
      updated_at: 'Fri, 09 May 2025 21:28:13 GMT',
      zip_code: '30303',
      tag: 'Waterfront View',
    },
  ],
  // you can add here more slices (properties in the object) - user, theme, etc...
});
