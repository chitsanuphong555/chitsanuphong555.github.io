import User from "../components/user";

function UserList({ users }) {
  return (
    <>
      Test fetch user list:{" "}
      {users.map((user) => {
        return (
          <div key={user.id} style={{ overflow: "scroll" }}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
