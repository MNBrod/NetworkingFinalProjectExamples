import java.util.Scanner;

public class Client {

	public static void main(String[] args) {

		HttpConnection http = new HttpConnection();

		String response = "";

		Scanner scanner = new Scanner(System.in);

		while (true) {

			System.out

					.println("What would you like to do? (add user, get users, find primes, add two numbers, or quit)");

			response = scanner.nextLine();

			if (response.equalsIgnoreCase("add user")) {

				System.out.println("sending http POST request");

				try {

					http.sendPost(args[0], scanner);

				} catch (Exception e) {

					System.out.println("Could not add user");

				}

			} else if (response.equalsIgnoreCase("get users")) {

				System.out.println("sending http GET request");

				http.sendGet(args[0]);

			} else if (response.equalsIgnoreCase("find primes")) {

				System.out.println("sending http GET request");

				http.findPrimes(args[0], scanner);

			} else if (response.equalsIgnoreCase("add two numbers")) {

				System.out.println("sending http GET request");

				http.addNumbers(args[0], scanner);

			} else if (response.equalsIgnoreCase("quit")) {

				break;

			}

			else {

				System.out.println("invalid input, try again.");

			}

		}
		scanner.close();
	}
}