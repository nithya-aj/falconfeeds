export const passwordRules = [
    {
        label: "At least 8 characters",
        test: (value) => value.length >= 8,
    },
    {
        label: "At least 1 number",
        test: (value) => /\d/.test(value),
    },
    {
        label: "At least 1 lowercase letter",
        test: (value) => /[a-z]/.test(value),
    },
    {
        label: "At least 1 uppercase letter",
        test: (value) => /[A-Z]/.test(value),
    },
    {
        label: "At least 1 special character -_~!@#$%^&*`+=|;:><,.?/",
        test: (value) => /[-_~!@#$%^&*`+=|;:><,.?/]/.test(value),
    },
];
