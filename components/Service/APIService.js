class APIService {
    constructor() {
        this.baseUrl = 'https://api.goda-ai.com';
        // this.baseUrl = 'http://localhost:8080';
    }

    async fetchData(path, jwtToken = null) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (jwtToken) {
            requestOptions.headers['Authorization'] = `Bearer ${jwtToken}`;
        }

        const url = `${this.baseUrl}/${path}`;

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }
    }

    async postData(path, data, jwtToken = null) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        if (jwtToken) {
            requestOptions.headers['Authorization'] = `Bearer ${jwtToken}`;
        }

        const url = `${this.baseUrl}/${path}`;

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }
    }
    async postData1(path, data, jwtToken = null) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        if (jwtToken) {
            requestOptions.headers['Authorization'] = `Bearer ${jwtToken}`;
        }

        const url = `${this.baseUrl}/${path}`;

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return "ok";
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }
    }
}

export default APIService;
