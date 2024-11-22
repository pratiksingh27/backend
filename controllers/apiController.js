const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  exports.handlePost = (req, res) => {
    const { data, file_b64 } = req.body;
    const userId = "pratiksingh27";
    const email = "pratik27march@gmail.com";
    const rollNumber = "0101IT211038";
  
    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';
    let primeFound = false;
  
    data.forEach((item) => {
      if (!isNaN(item)) {
        numbers.push(item);
        if (isPrime(Number(item))) primeFound = true;
      } else if (/[a-zA-Z]/.test(item)) {
        alphabets.push(item);
        if (/[a-z]/.test(item) && item > highestLowercase) {
          highestLowercase = item;
        }
      }
    });
  
    const response = {
      is_success: true,
      user_id: userId,
      email,
      roll_number: rollNumber,
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
      is_prime_found: primeFound,
      file_valid: file_b64 ? true : false,
      file_mime_type: file_b64 ? "application/octet-stream" : null,
      file_size_kb: file_b64 ? (Buffer.from(file_b64, 'base64').length / 1024).toFixed(2) : null,
    };
  
    res.status(200).json(response);
  };
  
  exports.handleGet = (req, res) => {
    res.status(200).json({ operation_code: 1 });
  };
  