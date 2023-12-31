// const API_BASE = "http://localhost:9003/api/";
export const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://api.masterweb.gr/api/"
    : "http://localhost:9003/api/"; 

// Auth
export const loginUrl = `${API_BASE}auth/login`;
export const getProfileUrl = `${API_BASE}auth/me`;
export const forgotPasswordUrl = `${API_BASE}auth/forgot-password`;
export const updatePasswordUrl = `${API_BASE}auth/update-password`;
export const resetPasswordUrl = (token) =>
  `${API_BASE}auth/reset-password/${token}`;

// Secretaries
export const getSecretariesUrl = ({ search = "" }) =>
  `${API_BASE}secretaries?search=${search}`;
export const createSecretaryUrl = `${API_BASE}secretaries`;
export const getSecretaryUrl = (id) => `${API_BASE}secretaries/${id}`;
export const updateSecretaryUrl = (id) => `${API_BASE}secretaries/${id}`;
export const deleteSecretaryUrl = (id) => `${API_BASE}secretaries/${id}`;

// Admins
export const getAdminsUrl = ({ search = "" }) =>
  `${API_BASE}admins?search=${search}`;
export const createAdminUrl = `${API_BASE}admins`;
export const getAdminUrl = (id) => `${API_BASE}admins/${id}`;
export const updateAdminUrl = (id) => `${API_BASE}admins/${id}`;
export const deleteAdminUrl = (id) => `${API_BASE}admins/${id}`;

// Doctors
export const getDoctorsUrl = ({ search = "" }) =>
  `${API_BASE}doctors?search=${search}`;
export const createDoctorUrl = `${API_BASE}doctors`;
export const getDoctorUrl = (id) => `${API_BASE}doctors/${id}`;
export const getDoctorAssignedPatientUrl = (id) => `${API_BASE}doctors/${id}/assigned-patients`;
export const updateDoctorUrl = (id) => `${API_BASE}doctors/${id}`;
export const deleteDoctorUrl = (id) => `${API_BASE}doctors/${id}`;
export const makeDoctorAdminUrl = (id) => `${API_BASE}doctors/${id}/make-admin`;
export const revokeDoctorAdminUrl = (id) => `${API_BASE}doctors/${id}/revoke-admin`;

// Departments
export const getDepartmentsUrl = `${API_BASE}departments`;
export const createDepartmentUrl = `${API_BASE}departments`;
export const deleteDepartmentUrl = (id) => `${API_BASE}departments/${id}`;

// Diagnosis
export const getDiagnosisUrl = `${API_BASE}diagnosis`;
export const createDiagnosisUrl = `${API_BASE}diagnosis`;
export const deleteDiagnosisUrl = (id) => `${API_BASE}diagnosis/${id}`;

// Patients
export const getPatientsUrl = ({ search = "", type="" }) =>
  `${API_BASE}patients?search=${search}&type=${type}`;
export const createPatientUrl = `${API_BASE}patients`;
export const getPatientUrl = (id) => `${API_BASE}patients/${id}`;
export const updatePatientUrl = (id) => `${API_BASE}patients/${id}`;
export const deletePatientUrl = (id) => `${API_BASE}patients/${id}`;

//contact
export const createContactUrl = (id) => `${API_BASE}patients/contact/${id}`;
export const deleteContactUrl = (id) => `${API_BASE}patients/contact/${id}`;
export const updateContactUrl = (pid, cid) => `${API_BASE}patients/contact/${pid}/${cid}`;

// Contact Type
export const createContactTypesUrl = `${API_BASE}patients/contact-type`;
export const getContactTypesUrl = `${API_BASE}patients/contact-type`;
export const deleteContactTypeUrl = (id) =>
  `${API_BASE}patients/contact-type/${id}`;

//comments
export const createCommentUrl = (id) => `${API_BASE}patients/comment/${id}`;
export const getCommentsUrl = (id) => `${API_BASE}patients/comment/${id}`;
export const deleteCommentUrl = (id) => `${API_BASE}patients/comment/${id}`;

// Contact Type
export const createCommentTypesUrl = `${API_BASE}patients/comment-type`;
export const getCommentTypesUrl = `${API_BASE}patients/comment-type`;
export const deleteCommentTypeUrl = (id) =>
  `${API_BASE}patients/comment-type/${id}`;

//files
export const addPatientFileUrl = (id) => `${API_BASE}patients/files/${id}`;
export const deletePatientFileUrl = (pid, fid) => `${API_BASE}patients/files/${pid}/${fid}`;
export const assignPatientDoctorUrl = (pid, did) =>
  `${API_BASE}patients/assign-doctor/${pid}/${did}`;
export const unAssignPatientDoctorUrl = (pid, did) =>
  `${API_BASE}patients/un-assign-doctor/${pid}/${did}`;

// Chats
export const getChatsUrl = `${API_BASE}chats`;
export const createChatsUrl = `${API_BASE}chats`;
export const getChatMessagesUrl = (id) => `${API_BASE}messages/${id}`;
export const sendMessageUrl = `${API_BASE}messages`;
export const searchChatUserUrl = (key, query) =>
  `${API_BASE}${key}/search?search=${query}`;

// Appointment
export const createAppointmentUrl = `${API_BASE}appointments`;
export const getAppointmentsUrl = (id) => `${API_BASE}appointments/${id}`;
export const getAllAppointmentsUrl = (id) => `${API_BASE}appointments/get-all`;
export const updateAppointmentUrl = (id) => `${API_BASE}appointments/${id}`;
export const deleteAppointmentUrl = (id) => `${API_BASE}appointments/${id}`;

export const uploadAvatarUrl = (id) => `${API_BASE}avatar/${id}`;
