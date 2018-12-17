import java.net.URL;

import java.util.Scanner;

import java.io.BufferedReader;

import java.io.DataOutputStream;

import java.io.IOException;

import java.io.InputStreamReader;

import java.net.HttpURLConnection;

import java.net.MalformedURLException;

public class HttpConnection {

	public void sendGet(String name) {

		String url = name + ":3000/users";

		URL obj;

		try {

			obj = new URL(url);

			HttpURLConnection connection = (HttpURLConnection) obj.openConnection();

			connection.setRequestMethod("GET");

			int responseCode = connection.getResponseCode();

			System.out.println("\nSending 'GET' request to URL : " + url);

			System.out.println("Response code : " + responseCode);

			BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));

			String inputLine;

			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {

				response.append(inputLine);

			}

			in.close();

			System.out.println("response: ");

			System.out.println(response.toString());

			connection.disconnect();

		} catch (MalformedURLException e) {

			System.out.println("problem with URL");

		} catch (IOException e) {

			System.out.println("Cannot open connection");

		}

	}

	public void sendPost(String a, Scanner scanner) throws Exception {

		String url = a + ":3000/addUser";

		URL obj = new URL(url);

		HttpURLConnection connection = (HttpURLConnection) obj.openConnection();

		connection.setRequestMethod("POST");

		System.out.println("Provide a name: ");

		String name = scanner.nextLine();

		System.out.println("Provide an email: ");

		String email = scanner.nextLine();

		String urlParameters = "name=" + name + "&email=" + email;

		connection.setDoOutput(true);

		DataOutputStream wr = new DataOutputStream(connection.getOutputStream());

		wr.writeBytes(urlParameters);

		wr.flush();

		wr.close();

		int responseCode = connection.getResponseCode();

		System.out.println("\nSending 'POST' request to URL : ");

		System.out.println("Post parameters : " + urlParameters);

		System.out.println("Response code: " + responseCode);

		BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));

		String inputLine;

		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {

			response.append(inputLine);

		}

		in.close();

		System.out.println(response.toString());

		connection.disconnect();

	}

	public void findPrimes(String a, Scanner scanner) {

		String url = a + ":1337/prime";

		URL obj;

		try {

			obj = new URL(url);

			HttpURLConnection connection = (HttpURLConnection) obj.openConnection();

			connection.setRequestMethod("POST");

			System.out.println("What two numbers would you like to find primes between? (separate by a space");

			String input = scanner.nextLine();

			String[] nums = input.split(" ");

			String urlParameters = "max=" + nums[0] + "&max=" + nums[1];

			connection.setDoOutput(true);

			DataOutputStream wr = new DataOutputStream(connection.getOutputStream());

			wr.writeBytes(urlParameters);

			wr.flush();

			wr.close();

			int responseCode = connection.getResponseCode();

			System.out.println("\nSending 'POST' request to URL : ");

			System.out.println("Post parameters : " + urlParameters);

			System.out.println("Response code: " + responseCode);

			BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));

			String inputLine;

			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {

				response.append(inputLine);

			}

			in.close();

			System.out.println(response.toString());

			connection.disconnect();

		} catch (MalformedURLException e) {

			System.out.println("problem with URL");

		} catch (IOException e) {

			System.out.println("Cannot open connection");

		}

	}

	public void addNumbers(String a, Scanner scanner) {

		String url = a + ":1337/add";

		URL obj;

		try {

			obj = new URL(url);

			HttpURLConnection connection = (HttpURLConnection) obj.openConnection();

			connection.setRequestMethod("POST");

			System.out.println("What two numbers would you like to add? (separate by a space");

			String input = scanner.nextLine();

			String[] nums = input.split(" ");

			String urlParameters = "min=" + nums[0] + "&max=" + nums[1];

			connection.setDoOutput(true);

			DataOutputStream wr = new DataOutputStream(connection.getOutputStream());

			wr.writeBytes(urlParameters);

			wr.flush();

			wr.close();

			int responseCode = connection.getResponseCode();

			System.out.println("\nSending 'POST' request to URL : ");

			System.out.println("Post parameters : " + urlParameters);

			System.out.println("Response code: " + responseCode);

			BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));

			String inputLine;

			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {

				response.append(inputLine);

			}

			in.close();

			System.out.println(response.toString());

			connection.disconnect();

		} catch (MalformedURLException e) {

			System.out.println("problem with URL");

		} catch (IOException e) {

			System.out.println("Cannot open connection");

		}

	}

}
