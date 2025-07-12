function addApprovedFingerprint(fingerprint) {
    approvedFingerprints[fingerprint] = true;
    // Save to storage/file
    localStorage.setItem('approvedFingerprints', 
        JSON.stringify(approvedFingerprints));
}