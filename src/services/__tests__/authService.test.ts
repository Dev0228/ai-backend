import {
  generateToken,
  verifyToken,
  findUserByEmailAndPassword,
  findUserById,
} from "../authService";

describe("authService", () => {
  const testUser = {
    id: "1",
    email: "admin@aidonic.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
  };

  it("should find user by email and password", () => {
    const user = findUserByEmailAndPassword(testUser.email, testUser.password);
    expect(user).toMatchObject({ id: testUser.id, email: testUser.email });
  });

  it("should not find user with wrong credentials", () => {
    const user = findUserByEmailAndPassword("wrong@email.com", "wrongpass");
    expect(user).toBeUndefined();
  });

  it("should find user by id", () => {
    const user = findUserById(testUser.id);
    expect(user).toMatchObject({ id: testUser.id, email: testUser.email });
  });

  it("should not find user with wrong id", () => {
    const user = findUserById("999");
    expect(user).toBeUndefined();
  });

  it("should generate and verify a valid JWT token", () => {
    const token = generateToken(testUser.id, testUser.role);
    const decoded = verifyToken(token);
    expect(decoded).toHaveProperty("userId", testUser.id);
    expect(decoded).toHaveProperty("role", testUser.role);
  });

  it("should return null for invalid JWT token", () => {
    const decoded = verifyToken("invalid.token.here");
    expect(decoded).toBeNull();
  });
});
