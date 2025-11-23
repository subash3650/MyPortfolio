"use client";

import { useState } from "react";
import { FiUpload, FiLock, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function UploadCertificate() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [notificationType, setNotificationType] = useState<"success" | "error">("success");

    // Certificate form state
    const [certificateName, setCertificateName] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [driveUrl, setDriveUrl] = useState("");
    const [issueDate, setIssueDate] = useState("");

    // Project form state
    const [projectName, setProjectName] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [demoLink, setDemoLink] = useState("");
    const [videoLink, setVideoLink] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "subash" && password === "subash@123") {
            setIsAuthenticated(true);
            showMessage("Login successful!", "success");
        } else {
            showMessage("Invalid credentials!", "error");
        }
    };

    const showMessage = (message: string, type: "success" | "error") => {
        setNotificationMessage(message);
        setNotificationType(type);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    const handleCertificateSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // In a real implementation, this would save to a database or update the JSON file
        const newCertificate = {
            id: Date.now().toString(),
            name: certificateName,
            company,
            description,
            driveUrl,
            issueDate,
        };

        console.log("New Certificate:", newCertificate);
        showMessage("Certificate added! (Note: This is a demo - data is not persisted)", "success");

        // Reset form
        setCertificateName("");
        setCompany("");
        setDescription("");
        setDriveUrl("");
        setIssueDate("");
    };

    const handleProjectSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProject = {
            name: projectName,
            githubUrl,
            demoLink,
            videoLink,
        };

        console.log("New Project:", newProject);
        showMessage("Project added! (Note: Projects are fetched from GitHub automatically)", "success");

        // Reset form
        setProjectName("");
        setGithubUrl("");
        setDemoLink("");
        setVideoLink("");
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full"
                >
                    <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 p-8 shadow-2xl">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-full mb-4">
                                <FiLock className="text-teal-400 text-2xl" />
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-2">Admin Access</h1>
                            <p className="text-gray-400">Please login to continue</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    placeholder="Enter username"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/50"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Notification */}
                <AnimatePresence>
                    {showNotification && (
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg ${notificationType === "success"
                                    ? "bg-green-500/90"
                                    : "bg-red-500/90"
                                } text-white`}
                        >
                            {notificationMessage}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-400">Upload certificates and manage projects</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Certificate Upload Form */}
                    <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 p-6">
                        <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-2">
                            <FiUpload />
                            Upload Certificate
                        </h2>

                        <form onSubmit={handleCertificateSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Certificate Name
                                </label>
                                <input
                                    type="text"
                                    value={certificateName}
                                    onChange={(e) => setCertificateName(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="e.g., AWS Certified Developer"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Company/Organization
                                </label>
                                <input
                                    type="text"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="e.g., Amazon Web Services"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Description
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="Brief description of the certificate"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Google Drive URL
                                </label>
                                <input
                                    type="url"
                                    value={driveUrl}
                                    onChange={(e) => setDriveUrl(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="https://drive.google.com/..."
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Issue Date
                                </label>
                                <input
                                    type="month"
                                    value={issueDate}
                                    onChange={(e) => setIssueDate(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300"
                            >
                                Add Certificate
                            </button>
                        </form>
                    </div>

                    {/* Project Upload Form */}
                    <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 p-6">
                        <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-2">
                            <FiUpload />
                            Add Project
                        </h2>

                        <form onSubmit={handleProjectSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Project Name
                                </label>
                                <input
                                    type="text"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="e.g., Portfolio Website"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    GitHub URL
                                </label>
                                <input
                                    type="url"
                                    value={githubUrl}
                                    onChange={(e) => setGithubUrl(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="https://github.com/username/repo"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Demo Link (Optional)
                                </label>
                                <input
                                    type="url"
                                    value={demoLink}
                                    onChange={(e) => setDemoLink(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="https://demo-site.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Video Link (Optional)
                                </label>
                                <input
                                    type="url"
                                    value={videoLink}
                                    onChange={(e) => setVideoLink(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="https://youtube.com/..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300"
                            >
                                Add Project
                            </button>
                        </form>
                    </div>
                </div>

                {/* Notification */}
                <AnimatePresence>
                    {showNotification && (
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${notificationType === "success"
                                    ? "bg-green-500/90"
                                    : "bg-red-500/90"
                                } text-white`}
                        >
                            <span>{notificationMessage}</span>
                            <button onClick={() => setShowNotification(false)}>
                                <FiX />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
