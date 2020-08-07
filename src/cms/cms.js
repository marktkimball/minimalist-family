import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import EventItemPreview from './preview-templates/EventItemPreview';
import ImNewPagePreview from './preview-templates/ImNewPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import BeliefsPagePreview from './preview-templates/BeliefsPagePreview';
import CreditsPagePreview from './preview-templates/CreditsPagePreview';
import GivePagePreview from './preview-templates/GivePagePreview';
import HistoryPagePreview from './preview-templates/HistoryPagePreview';
import LeadershipPagePreview from './preview-templates/LeadershipPagePreview';
import LiveStreamPagePreview from './preview-templates/LiveStreamPagePreview';
import MissionsPagePreview from './preview-templates/MissionsPagePreview';
import SermonsPagePreview from './preview-templates/SermonsPagePreview';
import SundaySchoolPagePreview from './preview-templates/SundaySchoolPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('im-new', ImNewPagePreview);
CMS.registerPreviewTemplate('events', EventItemPreview);
CMS.registerPreviewTemplate('beliefs', BeliefsPagePreview);
CMS.registerPreviewTemplate('credits', CreditsPagePreview);
CMS.registerPreviewTemplate('give', GivePagePreview);
CMS.registerPreviewTemplate('history', HistoryPagePreview);
CMS.registerPreviewTemplate('leadership', LeadershipPagePreview);
CMS.registerPreviewTemplate('live-stream', LiveStreamPagePreview);
CMS.registerPreviewTemplate('missions', MissionsPagePreview);
CMS.registerPreviewTemplate('sermons', SermonsPagePreview);
CMS.registerPreviewTemplate('sunday-school', SundaySchoolPagePreview);
