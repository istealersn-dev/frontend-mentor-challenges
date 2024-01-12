export const generatePassword = (
    length: number,
    includeUppercase: boolean,
    includeLowercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean) => 
    {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?/';

    // Set the password characters based on inclusion
    let passChars = ''
    if (includeUppercase) passChars += uppercaseChars
    if (includeLowercase) passChars += lowercaseChars
    if (includeNumbers) passChars += numberChars
    if (includeSymbols) passChars += symbolChars

    if (passChars === '') {
        console.error('Please select at least one character type.')
        alert('Please select at least one character type')
    }

    const password = Array.from({length}, () => {
        const randomIndex = Math.floor(Math.random() * passChars.length)
        return passChars.charAt(randomIndex)
    }).join('')

    return password
}