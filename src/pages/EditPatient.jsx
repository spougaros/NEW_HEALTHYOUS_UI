import React, { useEffect, useState } from "react";
import DashboardWrapper from "../components/DashboardWrapper";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import InputField from "../components/common/InputField";
import SelectField from "../components/common/SelectField";
import { gender } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    getPatientAction,
    updatePatientAction,
} from "../redux/actions/patients.action";
import { getDiagnosisAction } from "../redux/actions/diagnosis.action";
import { toast } from "react-toastify";
import Select from "react-select";

const EditPatient = () => {
    const { loadingPatient, updating, patient } = useSelector(
        (state) => state.patientsState
    );
    const { authDetails } = useSelector((state) => state.authState);
    const { diagnosis } = useSelector((state) => state.diagnosisState);

    const [error, setError] = useState("");
    const [selectedDiagnosis, setSelectedDiagnosis] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const handleEditPatient = async (data) => {
        setError("");

        const diagnosis_ = selectedDiagnosis.map((d) => d.value);

        const res = await dispatch(
            updatePatientAction({ ...data, diagnosis: diagnosis_ }, patient?._id)
        );

        if (!res.success) {
            setError(res.message);
            return;
        }
        toast.success(`Patient Updated Successfully`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        navigate("/patients");
    };

    useEffect(() => {
        if (patient?._id) {
            setValue("firstname", patient?.firstname);
            setValue("lastname", patient?.lastname);
            setValue("email", patient?.email);
            setValue("gender", patient?.gender);
            setValue("phone", patient?.phone);
            setValue("address", patient?.address);
            setValue("type", patient?.type);

            const temp_dob = patient?.dob.slice(0, 10);
            setValue("dob", temp_dob);
            setSelectedDiagnosis(
                patient.diagnosis?.map((diag) => {
                    return {
                        value: diag._id,
                        label: diag.name,
                    };
                }) ?? []
            );
        }
    }, [patient, setValue]);

    useEffect(() => {
        authDetails?._id && dispatch(getPatientAction(id));
        authDetails?._id && dispatch(getDiagnosisAction());
    }, [dispatch, authDetails?._id, id]);

    if (
        authDetails?._id &&
        authDetails?.role !== "admin" &&
        authDetails?.role !== "secretary" &&
        authDetails?.role === "doctor" &&
        !authDetails?.isAdmin
    ) {
        navigate("/home");
        return null;
    }

    return (
        <DashboardWrapper>
            <Header title="Dashboard" />
            <div className="p-4 max-w-4xl mx-auto ">
                <div className="my-4 p-5 bg-white _shadow">
                    <h2 className="font-medium">Edit Patient</h2>
                </div>

                {error && (
                    <div className="text-center bg-red-200 rounded-md text-red-500 my-4 text-sm p-1">
                        {error}
                    </div>
                )}

                {loadingPatient ? (
                    <div className="w-full flex pt-20 justify-center">
                        <FaSpinner className="text-3xl animate-spin" />
                    </div>
                ) : (
                    <div className="bg-white p-5 _shadow">
                        {patient?._id ? (
                            <form onSubmit={handleSubmit(handleEditPatient)}>
                                <div className="flex gap-5">
                                    <InputField
                                        errors={errors}
                                        name="firstname"
                                        label="Firstname"
                                        register={register}
                                        required={true}
                                        type="text"
                                    />
                                    <InputField
                                        errors={errors}
                                        name="lastname"
                                        label="Lastname"
                                        register={register}
                                        required={true}
                                        type="text"
                                    />
                                </div>

                                <div className="flex gap-5 mt-4">
                                    <InputField
                                        errors={errors}
                                        name="phone"
                                        label="Phone Number"
                                        register={register}
                                        required={true}
                                        type="text"
                                    />
                                    <InputField
                                        errors={errors}
                                        name="email"
                                        label="Email"
                                        register={register}
                                        optional={true}
                                        type="email"
                                    />
                                </div>

                                <div className="flex gap-5 mt-4">
                                    <InputField
                                        errors={errors}
                                        name="dob"
                                        label="Date of Birth"
                                        register={register}
                                        required={true}
                                        type="date"
                                    />
                                    <SelectField
                                        errors={errors}
                                        name="type"
                                        label="Type"
                                        register={register}
                                        required={true}
                                        options={[
                                            {
                                                value: "active",
                                                label: "Active",
                                            },
                                            {
                                                value: "inactive",
                                                label: "Inactive",
                                            },
                                            {
                                                value: "not-subscribed",
                                                label: "Not Subscribed",
                                            },
                                        ]}
                                    />
                                </div>

                                <div className="flex gap-5 mt-4">
                                    <SelectField
                                        errors={errors}
                                        name="gender"
                                        label="Gender"
                                        register={register}
                                        required={true}
                                        options={gender}
                                    />
                                    <InputField
                                        errors={errors}
                                        name="address"
                                        label="Address"
                                        register={register}
                                        required={true}
                                        type="text"
                                    />
                                </div>

                                <div className="flex-1 mt-4">
                                    <label
                                        htmlFor="firstname"
                                        className="text-md mb-2 block"
                                    >
                                        Select Diagnosis
                                    </label>
                                    <Select
                                        placeholder="Select Diagnosis"
                                        isMulti
                                        value={selectedDiagnosis}
                                        onChange={(value) =>
                                            setSelectedDiagnosis(value)
                                        }
                                        options={diagnosis?.map((diag) => {
                                            return {
                                                value: diag._id,
                                                label: diag.name,
                                            };
                                        })}
                                    />
                                </div>

                                <button
                                    disabled={updating}
                                    className="mt-6 bg-seagreen py-2 text-sm px-10 text-white rounded-md 
                            flex items-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {updating ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            <span className="text-sm">
                                                Loading...
                                            </span>
                                        </>
                                    ) : (
                                        <span>Update</span>
                                    )}
                                </button>
                            </form>
                        ) : (
                            <div className="flex justify-center py-20">
                                <h4 className="uppercase text-3xl font-bold text-center opacity-50">
                                    Patient NOT FOUND
                                </h4>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </DashboardWrapper>
    );
};

export default EditPatient;
