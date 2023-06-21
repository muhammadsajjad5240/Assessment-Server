const _ = require('lodash');
const scopes = require('./scopes');

const constants = {};

constants.LONG_CACHE = 2592000000; // milliseconds as 30 days
constants.SHORT_CACHE = 60000; // milliseconds as 1 minute

constants.POSSIBLE_BOOLEAN = [true, false];
constants.GENDER_TYPES = ['male', 'female', 'others'];
constants.SOCIAL_PROVIDERS = ['google', 'facebook'];

constants.ADMIN_ROLE = 'admin';
constants.TEACHER_ROLE = 'teacher';
constants.STUDENT_ROLE = 'student';

constants.AUTHORIZED_ROLES = [constants.ADMIN_ROLE, constants.TEACHER_ROLE, constants.STUDENT_ROLE];
constants.USER_TYPES = [constants.ADMIN_ROLE, constants.TEACHER_ROLE, constants.STUDENT_ROLE];

constants.MARITAL_STATUS_TYPES = ['None', 'Single', 'Married', 'Divorced'];

// Course levels
constants.COURSE_LEVEL = ['beginner', 'intermediate', 'expert'];

// Course plan
constants.COURSE_PLANS = ['one2one', 'buddy', 'group'];

// Slot Status
constants.SLOT_STATUS_AVAILABLE = 'available';
constants.SLOT_STATUS_IN_PROGRESS = 'in progress';
constants.SLOT_STATUS_BOOKED = 'booked';
constants.SLOT_STATUS_CANCELLED = 'cancelled';
constants.SLOT_STATUS_COMPLETED = 'completed';
constants.SLOT_STATUS_EXPIRED = 'expired';

constants.SLOTS_STATUS = [
  constants.SLOT_STATUS_AVAILABLE,
  constants.SLOT_STATUS_IN_PROGRESS,
  constants.SLOT_STATUS_BOOKED,
  constants.SLOT_STATUS_CANCELLED,
  constants.SLOT_STATUS_COMPLETED,
];

// Installment status
constants.TRANSACTION_STATUS_PENDING = 'pending';
constants.TRANSACTION_STATUS_PAID = 'paid';
constants.TRANSACTION_STATUS_CANCELLED = 'cancelled';

constants.TRANSACTION_STATUSES = [
  constants.TRANSACTION_STATUS_PENDING,
  constants.TRANSACTION_STATUS_PAID,
  constants.TRANSACTION_STATUS_CANCELLED,
];

// Question types
constants.QUESTION_TYPES_MCQ = 'mcq';
constants.QUESTION_TYPES_TF = 'tf';

constants.QUESTION_TYPES = [constants.QUESTION_TYPES_MCQ, constants.QUESTION_TYPES_TF];

// Session levels
constants.SESSION_LEVEL_BEGINNER = 'beginner';
constants.SESSION_LEVEL_INTERMEDIATE = 'intermediate';
constants.SESSION_LEVEL_EXPERT = 'expert';
constants.SESSION_LEVELS = [
  constants.SESSION_LEVEL_BEGINNER,
  constants.SESSION_LEVEL_INTERMEDIATE,
  constants.SESSION_LEVEL_EXPERT,
];

// Public Quiz Grade

constants.PUBLIC_QUIZ_GRADE = ['1-12', '6-12', '7-12'];

// Session types
constants.SESSION_TYPE_ONE_TO_ONE = 'one2one';
constants.SESSION_TYPE_BUDDY = 'buddy';
constants.SESSION_TYPE_GROUP = 'group';
constants.SESSION_TYPES = [constants.SESSION_TYPE_ONE_TO_ONE, constants.SESSION_TYPE_BUDDY, constants.SESSION_TYPE_GROUP];

// Enrollment Statuses
constants.ENROLLMENT_STATUS_APPROVED = 'approved';
constants.ENROLLMENT_STATUS_COMPLETE = 'complete';
constants.ENROLLMENT_STATUS_REJECTED = 'rejected';
constants.ENROLLMENT_STATUS_PENDING = 'pending';
constants.ENROLLMENT_STATUS_CANCELLED = 'cancelled';
constants.ENROLLMENT_STATUSES = [
  constants.ENROLLMENT_STATUS_APPROVED,
  constants.ENROLLMENT_STATUS_REJECTED,
  constants.ENROLLMENT_STATUS_PENDING,
  constants.ENROLLMENT_STATUS_CANCELLED,
];

// Class Statuses
constants.CLASS_STATUS_PENDING = 'pending';
constants.CLASS_STATUS_COMPLETED = 'completed';
constants.CLASS_STATUS_CONTINUE = 'continue';
constants.CLASS_STATUS_CANCELLED = 'cancelled';

constants.CLASS_STATUS = [
  constants.CLASS_STATUS_PENDING,
  constants.CLASS_STATUS_CONTINUE,
  constants.CLASS_STATUS_COMPLETED,
  constants.CLASS_STATUS_CANCELLED,
];

// modules
constants.REF_TYPES = _.keys(scopes);

// Attachment types of extensions allowed
constants.EXTENSIONS = [
  '.png',
  '.PNG',
  '.jpg',
  '.JPG',
  '.jpeg',
  '.JPEG',
  '.docs',
  '.xls',
  '.pdf',
  '.mp4',
  '.mkv',
  '.mov',
  '.zip',
  '.avi',
  '.docx',
  '.exe',
  '.gif',
  '.ico',
  '.jpm',
  '.mov',
  '.mp1',
  '.mp2',
  '.odp',
  '.ods',
  '.ogg',
  '.ogx',
  '.spx',
  '.sb3',
  '.wasm',
  '.xlsx',
  '.xz',
  '.zst',
  '.csv',
  '.doc',
  '.txt',
  '.wpd',
  '.mpg',
  '.wmv',
  '.vob',
  '.3gp',
  '.wav',
  '.c',
  '.java',
  '.py',
  '.cs',
  '.PHP',
  '.php',
  '.swift',
  '.vb',
  '.htm',
  '.html',
  '.xhtml',
  '.jsx',
  '.js',
  '.JS',
  '.rss',
  '.css',
  '.pkg',
  '.rar',
  '.z',
  '.sql',
  '.xml',
  '.ttf',
  '.svg',
  '.jsp',
  '.swift',
  '.scss',
  '.ts',
  '.vue',
];

// Pdf extensions
constants.PDF_EXTENSIONS = ['.pdf', '.PDF'];

// Video Attachment of extensions allowed
constants.VIDEO_EXTENSIONS = ['.mp4', '.mkv', '.mov', '.wmv', '.avi', 'webm'];

// Image types of extensions allowed
constants.IMAGE_EXTENSIONS = ['.png', '.PNG', '.jpg', '.JPG', '.jpeg', '.JPEG', '.jpeg', '.JPEG'];

// Number of attempts
constants.NUMBER_OF_ATTEMPTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];

/* When Time Expires Options means quiz immediately exit and result show. Or quiz run and remaining questions
 after time limit become red and notify these questions attempted after time limit
 */
constants.WHEN_TIME_EXPIRES_OPTIONS = [
  'Open attempts are submitted automatically',
  'There is a grace period when open attempts can be submitted, but no more questions answered',
  'Attempts must be submitted before time expires, or they are not counted',
];

// Grading Category Options
constants.GRADING_CATEGORY_OPTIONS = ['Uncategorized', 'Required'];

// Grading Method Options
constants.GRADING_METHOD_OPTIONS = ['Highest Grade', 'Average Grade', 'First Attempt', 'Last Attempt'];

// Quiz maximum length of name
constants.MAXIMUM_QUIZ_NAME_LENGTH = 100;

// Time limit of quiz is in minutes
constants.MAXIMUM_QUIZ_TIME_LIMIT = 60;

// Maximum grade to pass quiz.
constants.MAXIMUM_GRADE_TO_PASS = 100;

// Class grade
constants.CLASS_GRADE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// payment type
constants.PAYMENT_TYPE_ONE_TIME = 'oneTimePayment';
constants.PAYMENT_TYPE_PARTIAL = 'partialPayments';
constants.PAYMENT_TYPES = [constants.PAYMENT_TYPE_ONE_TIME, constants.PAYMENT_TYPE_PARTIAL];

// payment methods
constants.EASYPAISA = 'easypaisa';
constants.PAYPAL = 'paypal';
constants.PAYONEER = 'payoneer';
constants.STRIPE = 'stripe';
constants.CASH = 'cash';
constants.PAYMENT_METHODS = [constants.EASYPAISA, constants.PAYPAL, constants.PAYONEER, constants.STRIPE, constants.CASH];

constants.NO_OF_INSTALLMENTS = [2, 3];

// payment statuses
constants.PAYMENT_STATUSES_COMPLETED = 'completed';
constants.PAYMENT_STATUSES_PENDING = 'pending';
constants.PAYMENT_STATUSES_NOT_APPLICABLE = 'notApplicable';
constants.PAYMENT_STATUSES = [
  constants.PAYMENT_STATUSES_COMPLETED,
  constants.PAYMENT_STATUSES_PENDING,
  constants.PAYMENT_STATUSES_NOT_APPLICABLE,
];

// easypaisa transaction type
constants.TRANSACTION_TYPE = 'MA';

// trial class feedback
constants.TEACHER_POOR_BEHAVIOR = 'poor';
constants.TEACHER_FAIR_BEHAVIOR = 'fair';
constants.TEACHER_GOOD_BEHAVIOR = 'good';
constants.TEACHER_VERY_GOOD_BEHAVIOR = 'veryGood';
constants.TEACHER_EXCELLENT_BEHAVIOR = 'excellent';

constants.TEACHER_BEHAVIOR = [
  constants.TEACHER_POOR_BEHAVIOR,
  constants.TEACHER_FAIR_BEHAVIOR,
  constants.TEACHER_GOOD_BEHAVIOR,
  constants.TEACHER_VERY_GOOD_BEHAVIOR,
  constants.TEACHER_EXCELLENT_BEHAVIOR,
];

// Class activity type
constants.WIKI = 'wiki';
constants.QUIZ = 'quiz';
constants.ASSIGNMENT = 'assignment';
constants.ACTIVITY_TYPE = [constants.WIKI, constants.QUIZ, constants.ASSIGNMENT];

constants.ERROR = 'An unexpected error has been occurred';

// all important links (requests by teacher and student)
constants.LEAVE_REQUEST = 'leaveRequest';
constants.PTM_REQUEST = 'parentTeacherMeeting';
constants.DOUBT_CLASS = 'doubtClass';
constants.RESCHEDULE_CLASS = 'rescheduleClass';
constants.CANCEL_ENROLLMENT = 'cancelEnrollment';
constants.PAYOUT_QUERIES = 'payoutQueries';
constants.CHANGE_CURRICULUM = 'changeCurriculum';
constants.BLOCK_USER = 'blockUser';
constants.CHANGE_TEACHER = 'changeTeacher';
constants.CLASS_END = 'classEnd';
constants.CLASS_DISRUPTION = 'classDisruption';
constants.REQUEST_TYPES = [
  constants.LEAVE_REQUEST,
  constants.PTM_REQUEST,
  constants.DOUBT_CLASS,
  constants.PAYOUT_QUERIES,
  constants.RESCHEDULE_CLASS,
  constants.CANCEL_ENROLLMENT,
  constants.CHANGE_CURRICULUM,
  constants.BLOCK_USER,
  constants.CHANGE_TEACHER,
  constants.CLASS_END,
  constants.CLASS_DISRUPTION,
];

constants.REQUEST_STATUS_PENDING = 'pending';
constants.REQUEST_STATUS_APPROVED = 'approved';
constants.REQUEST_STATUS_WITHDRAWN = 'withdrawn';
constants.REQUEST_STATUS_REJECTED = 'rejected';

constants.REQUEST_STATUS = [
  constants.REQUEST_STATUS_PENDING,
  constants.REQUEST_STATUS_APPROVED,
  constants.REQUEST_STATUS_WITHDRAWN,
  constants.REQUEST_STATUS_REJECTED,
];

constants.STUDENT_REQUESTS = [
  constants.CHANGE_TEACHER,
  constants.CHANGE_CURRICULUM,
  constants.DOUBT_CLASS,
  constants.LEAVE_REQUEST,
];

constants.TEACHER_REQUESTS = [
  constants.PTM_REQUEST,
  constants.PAYOUT_QUERIES,
  constants.CANCEL_ENROLLMENT,
  constants.LEAVE_REQUEST,
  constants.CLASS_DISRUPTION,
];

// Partnership collaboration purpose
constants.PARTNERSHIP_PURPOSE_MOU = 'MOU';
constants.PARTNERSHIP_PURPOSE_WEBINAR = 'Webinar';
constants.PARTNERSHIP_PURPOSE_MASTER_CLASS = 'Master Class';

constants.PARTNERSHIP_PURPOSE = [
  constants.PARTNERSHIP_PURPOSE_MOU,
  constants.PARTNERSHIP_PURPOSE_WEBINAR,
  constants.PARTNERSHIP_PURPOSE_MASTER_CLASS,
];

// Partnership status
constants.PARTNERSHIP_STATUS_PENDING = 'pending';
constants.PARTNERSHIP_STATUS_APPROVED = 'approved';
constants.PARTNERSHIP_STATUS_REJECTED = 'rejected';

constants.PARTNERSHIP_STATUS = [
  constants.PARTNERSHIP_STATUS_PENDING,
  constants.PARTNERSHIP_STATUS_APPROVED,
  constants.PARTNERSHIP_STATUS_REJECTED,
];

// Class cancelled status reasons
constants.CLASS_CANCEL_REASON_INSTRUCTOR_UNAVAILABILITY =
  'Instructor Unavailability: The instructor is unavailable due to unforeseen circumstances such as illness or family emergency.';
constants.CLASS_CANCEL_REASON_STUDENT_UNAVAILABILITY =
  'Student Unavailability: The student is unavailable due to unforeseen circumstances such as illness or family emergency.';
constants.CLASS_CANCEL_REASON_TECHNICAL_DIFFICULTIES =
  'Technical Difficulties: There are technical difficulties with the LMS';
constants.CLASS_CANCEL_REASON_INSTRUCTOR_INTERNET_CONNECTION_PROBLEM =
  'Instructor Internet Connection Problem: There is some internet connection problem on instructor side.';
constants.CLASS_CANCEL_REASON_STUDENT_INTERNET_CONNECTION_PROBLEM =
  'Student Internet Connection Problem: There is some internet connection problem on student side.';

constants.CLASS_STATUS_CANCELLED_REASONS = [
  constants.CLASS_CANCEL_REASON_INSTRUCTOR_UNAVAILABILITY,
  constants.CLASS_CANCEL_REASON_STUDENT_UNAVAILABILITY,
  constants.CLASS_CANCEL_REASON_TECHNICAL_DIFFICULTIES,
  constants.CLASS_CANCEL_REASON_INSTRUCTOR_INTERNET_CONNECTION_PROBLEM,
  constants.CLASS_CANCEL_REASON_STUDENT_INTERNET_CONNECTION_PROBLEM,
];

module.exports = constants;
