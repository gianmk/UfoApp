using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Options;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestPlatform.CommunicationUtilities;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
using Moq;
using Serilog;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Xml.Linq;
using UFO.Controllers;
using UFO.DAL;
using UFO.Model;
using UFO2.Controllers;
using UFO2.DAL.UfoRepo;
using UFO2.Model;
using Xunit;


namespace Ufotest
{
    public class UserDControllerTest
    {
        private const string _loggIn = "loggIn";
        private const string _notLoggIn = "";

        private readonly Mock<IUserRepository> mockRep = new Mock<IUserRepository>();
        private readonly Mock<ILogger<UserController>> mockLog = new Mock<ILogger<UserController>>();

        private readonly Mock<HttpContext> mockHttpContext = new Mock<HttpContext>();
        private readonly MockHttpSession mockSession = new MockHttpSession();



        [Fact]
        public async Task logInOk()
        {

            mockRep.Setup(k => k.LoggInn(It.IsAny<User>())).ReturnsAsync(true);

            var userController = new UserController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            userController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await userController.LoggIn(It.IsAny<User>()) as OkObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);

        }
        [Fact]
        public async Task LoggInError()
        {
            mockRep.Setup(k => k.LoggInn(It.IsAny<User>())).ReturnsAsync(false);

            var userController = new UserController(mockRep.Object, mockLog.Object);

            mockSession[_notLoggIn] = _notLoggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            userController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await userController.LoggIn(It.IsAny<User>()) as OkObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);
            Assert.False((bool)resultat.Value);
        }
        [Fact]
        public async Task LoggInnInputFeil()
        {
            mockRep.Setup(k => k.LoggInn(It.IsAny<User>())).ReturnsAsync(true);

            var userController = new UserController(mockRep.Object, mockLog.Object);

            userController.ModelState.AddModelError("Username", "Validation error");

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            userController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await userController.LoggIn(It.IsAny<User>()) as BadRequestObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.BadRequest, resultat.StatusCode);
            Assert.Equal("Validation error", resultat.Value);
        }

        [Fact]
        public void LoggUt()
        {
            var userController = new UserController(mockRep.Object, mockLog.Object);

            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            mockSession[_loggIn] = _loggIn;
            userController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            userController.LogOut();

            // Assert
            Assert.Equal(_notLoggIn, mockSession[_loggIn]);
        }

        [Fact]
        public async Task AddUserWrongInputAsync()
        {
            //arrange
            var newUser = new User
            {
                Id = 1,
                Username = "",
                Password = "",


            };

            mockRep.Setup(u => u.AddUser(newUser)).ReturnsAsync(true);

            var userController = new UserController(mockRep.Object, mockLog.Object);

            userController.ModelState.AddModelError("Username", "Registration error");



            //act
            var resultat = await userController.AddUser(newUser) as BadRequestObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.BadRequest, resultat.StatusCode);
            Assert.Equal("Registration error", resultat.Value);

        }
        [Fact]
        public async Task AddUserOkAsync()
        {
            //arrange
            var newUser = new User
            {
                Id = 1,
                Username = "admin1",
                Password = "admin1",

            };

            mockRep.Setup(u => u.AddUser(newUser)).ReturnsAsync(true);

            var userController = new UserController(mockRep.Object, mockLog.Object);

            //act
            var resultat = await userController.AddUser(newUser) as OkObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);

        }
        [Fact]
        public async Task AddUserNotOk()
        {
            // Arrange

            mockRep.Setup(u => u.AddUser(It.IsAny<User>())).ReturnsAsync(false);

            var userController = new UserController(mockRep.Object, mockLog.Object);

            

            // Act
            var resultat = await userController.AddUser(It.IsAny<User>()) as OkObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);
            Assert.False((bool)resultat.Value);
        }
    }
}








