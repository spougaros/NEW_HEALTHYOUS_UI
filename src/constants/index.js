export { departments, gender } from "./select-options";

// export const STATIC_FILE_BASE = "http://localhost:9003/static/";
export const STATIC_FILE_BASE =
    process.env.NODE_ENV === "production"
        ? "https://api.masterweb.gr/static/"
        : "http://localhost:9003/static/"; 
export {
    // Auth
    loginUrl,
    getProfileUrl,
    forgotPasswordUrl,
    resetPasswordUrl,
    // Secretaries
    getSecretariesUrl,
    getSecretaryUrl,
    createSecretaryUrl,
    updateSecretaryUrl,
    deleteSecretaryUrl,
    // Admins
    getAdminUrl,
    getAdminsUrl,
    createAdminUrl,
    updateAdminUrl,
    deleteAdminUrl,
    // Doctors
    getDoctorUrl,
    getDoctorsUrl,
    createDoctorUrl,
    deleteDoctorUrl,
    updateDoctorUrl,
    makeDoctorAdminUrl,
    revokeDoctorAdminUrl,
    // Department
    getDepartmentsUrl,
    createDepartmentUrl,
    deleteDepartmentUrl,
    // Diagnosis
    getDiagnosisUrl,
    createDiagnosisUrl,
    deleteDiagnosisUrl,
    // Patients
    getPatientUrl,
    getPatientsUrl,
    createPatientUrl,
    updatePatientUrl,
    deletePatientUrl,
    createContactTypesUrl,
    deleteContactTypeUrl,
    deleteCommentUrl,
    deleteContactUrl,
    getContactTypesUrl,
    getCommentTypesUrl,
    getCommentsUrl,
    createContactUrl,
    createCommentUrl,
    addPatientFileUrl,
    assignPatientDoctorUrl,
    // Chats
    getChatsUrl,
} from "./networkUrls";
