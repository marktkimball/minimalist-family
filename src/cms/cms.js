import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import EventItemPreview from './preview-templates/EventItemPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import CreditsPagePreview from './preview-templates/CreditsPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('events', EventItemPreview);
CMS.registerPreviewTemplate('credits', CreditsPagePreview);
